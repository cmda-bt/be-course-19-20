const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");
const session = require("express-session");

// modules
const mongo = require('./modules/mongo');
const parseText = require('./modules/parseText')
const render = require('./modules/render')
const findCityData = require('./modules/findCityData')

// use
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));
app.use(session({
	resave: false,
	saveUninitialized: true,
	secret: process.env.SESSION
}))

// set
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//get
app.get("/", render.renderIndex)
app.get("/matches", render.renderMatches)
app.get("/festivals", render.renderFestivals)

// post
app.post("/", async function (req, res) {

	let newLocation

	if (req.body.userSuggestion === 'removeLocation') {
		console.log('remove Location');

		newLocation = { location: { latitude: "", longitude: "", timestamp: Date.now() } }
	}

	// user  provided  location with GEO API
	else if (req.body.userLocation) {
		const userGeoAPILocation = JSON.parse(req.body.userLocation)
		
		const { latitude: userLat, longitude: userLong } = userGeoAPILocation
		newLocation = { location: { latitude: userLat, longitude: userLong, timestamp: Date.now() } }
	}

	// if user selected a suggestion
	else if (req.body.userSuggestion) {
		// destructuring source : https://wesbos.com/destructuring-objects/
		const { latitude: userLat, longitude: userLong } = findCityData.findExactCityData(req.body.userSuggestion);
		newLocation = { location: { latitude: userLat, longitude: userLong, timestamp: Date.now() } }

	}

	// if user did not select a suggestion
	else {
		const userInput = parseText.upperCaseCorrection(req.body.userInput)
		const filteredData = findCityData.findFilteredCityData(userInput)

		// search for 1 specific value
		if (findCityData.findExactCityData(userInput)) {

			const { latitude: userLat, longitude: userLong } = findCityData.findExactCityData(userInput)
			newLocation = { location: { latitude: userLat, longitude: userLong, timestamp: Date.now() } }
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
	mongo.updateOne('fakeUsers', req.session._id, { $set: newLocation })

	render.renderIndex(req, res)
})

app.use(function (req, res) {
	res.status(404).render("pages/404");
});

app.listen(3000);