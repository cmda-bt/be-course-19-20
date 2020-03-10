const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");
const cityData = require('./static/data/cleanedCityData.json');
const slug = require('slug')
const {MongoClient} = require('mongodb');
require('dotenv').config()

const uri = process.env.MONGO_URI

async function findInDb(collection, searchValue){

    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
 
    try {
		await client.connect();

		const db = client.db('db');

		const festivals = await db.collection(collection).find(searchValue).toArray();
		return festivals	
 
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
	var R = 6371; // Radius of the earth in km
	var dLat = deg2rad(lat2 - lat1); // deg2rad below
	var dLon = deg2rad(lon2 - lon1);
	var a =
	  Math.sin(dLat / 2) * Math.sin(dLat / 2) +
	  Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
	  Math.sin(dLon / 2) * Math.sin(dLon / 2);
	var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
	var d = R * c; // Distance in km
	return Math.round(Number(d.toFixed(1)))
  }
  function deg2rad(deg) {
	return deg * (Math.PI / 180)
  }

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(express.static(path.join(__dirname, "./static")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => res.render("pages/index"));

app.post("/", async function (req, res) {

	const dbData = await findInDb('fakeUsers')

	// search for 1 specific value
	function findExactCityData(value) {
		return cityData.find(item => item.woonplaats === value)
	}

	// search for multiple matching values
	function findFilteredCityData(value) {
		return cityData.filter(item => item.woonplaats.includes(value));
	}
	
	// user  provided  location with GEO API
	if (req.body.userLocation) {
		const userGeoAPILocation = JSON.parse(req.body.userLocation)
		const {latitude:userLat, longitude:userLong} = userGeoAPILocation

		const newData = dbData.map(dbResult =>{
			const { location:{latitude:dbLat, longitude: dbLong} } = dbResult
			return { ...dbResult,  location: getDistanceFromLatLonInKm(dbLat, dbLong, userLat, userLong) }  
		})

		res.render("pages/matches", { matches: newData});

		return
	}

	// if user selected a suggestion
	else if (req.body.userSuggestion) {
		// destructuring source : https://wesbos.com/destructuring-objects/
		const {latitude:userLat, longitude:userLong} = findExactCityData(req.body.userSuggestion);
		
		const newData = dbData.map(dbResult =>{
			const { location:{latitude:dbLat, longitude: dbLong} } = dbResult
			return { ...dbResult,  location: getDistanceFromLatLonInKm(dbLat, dbLong, userLat, userLong) }  
		})

		res.render("pages/matches", { matches: newData});

		
		return
	}

	// if user did not select a suggestion
	else {
		const userInput = upperCaseCorrection(req.body.userInput)
		const filteredData = findFilteredCityData(userInput)

		// search for 1 specific value
		if (findExactCityData(userInput)) {
			console.log(findExactCityData(userInput));
			return
		}

		// there is not 1 specific match
		else {

			// if there are no matches with the input
			if (filteredData.length === 0) {
				res.render("pages/index", { message: `Wij konden ${userInput} niet vinden, probeer een stad in te typen `});
				return
			}

			// if there are matches with the input
			else{
				const reducedResults = filteredData.slice(0,  5)

				res.render("pages/index", { results: reducedResults, message: `Wij konden ${userInput} niet vinden, bedoelde je misschien:`});
				return
			}
		}
	}
})

// converts input to Uppercase first word letters
function upperCaseCorrection(input) {
    // source: https://stackoverflow.com/a/4878800
    const newInput = input.toLowerCase()
        .split(' ')
        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
        .join(' ');

    return newInput
}

app.use(function (req, res) {
	res.status(404).render("pages/404");
});

app.listen(3000);