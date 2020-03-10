const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");
const cityData = require('./static/data/cleanedCityData.json');
const slug = require('slug')
const {MongoClient} = require('mongodb');
require('dotenv').config()

const uri = process.env.MONGO_URI

async function callDb(){

    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
 
    try {
		await client.connect();

		const db = client.db('db');

		const festivals = await db.collection('festivals').find({}).toArray();
		console.log(festivals);
		
 
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

callDb().catch(console.error);

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(express.static(path.join(__dirname, "./static")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => res.render("pages/index"));

app.post("/", async function (req, res) {

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
		const {latitude, longitude} = userGeoAPILocation
		console.log(latitude, longitude);
		return
	}

	// if user selected a suggestion
	else if (req.body.userSuggestion) {
		// destructuring source : https://wesbos.com/destructuring-objects/
		const { latitude, longitude } = findExactCityData(req.body.userSuggestion);
		console.log(latitude, longitude);
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