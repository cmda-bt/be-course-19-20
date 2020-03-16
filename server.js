const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");
const cityData = require('./static/data/cleanedCityData.json');

// modules
const mongo = require('./modules/mongo');
const calcDistance = require('./modules/calculateDistance');
const parseText = require('./modules/parseText')

// use
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));

// set
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//get
app.get("/", (req, res) => res.render("pages/index"));

// post
app.post("/", async function (req, res) {

	const dbData = await mongo.findInDb('fakeUsers')

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
		const { latitude: userLat, longitude: userLong } = userGeoAPILocation

		const newData = dbData.map(dbResult => {
			const { location: { latitude: dbLat, longitude: dbLong } } = dbResult
			return { ...dbResult, location: calcDistance.getDistanceFromLatLonInKm(dbLat, dbLong, userLat, userLong) }
		})

		res.render("pages/matches", { matches: newData });

		return
	}

	// if user selected a suggestion
	else if (req.body.userSuggestion) {
		// destructuring source : https://wesbos.com/destructuring-objects/
		const { latitude: userLat, longitude: userLong } = findExactCityData(req.body.userSuggestion);

		const newData = dbData.map(dbResult => {
			const { location: { latitude: dbLat, longitude: dbLong } } = dbResult
			return { ...dbResult, location: calcDistance.getDistanceFromLatLonInKm(dbLat, dbLong, userLat, userLong) }
		})

		res.render("pages/matches", { matches: newData });


		return
	}

	// if user did not select a suggestion
	else {
		const userInput = parseText.upperCaseCorrection(req.body.userInput)
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
				res.render("pages/index", { message: `Wij konden ${userInput} niet vinden, probeer een stad in te typen ` });
				return
			}

			// if there are matches with the input
			else {
				const reducedResults = filteredData.slice(0, 5)

				res.render("pages/index", { results: reducedResults, message: `Wij konden ${userInput} niet vinden, bedoelde je misschien:` });
				return
			}
		}
	}
})

app.use(function (req, res) {
	res.status(404).render("pages/404");
});

app.listen(3000);