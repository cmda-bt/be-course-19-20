const mongo = require('./mongo');
const dateFormat = require('dateformat');
const calcDistance = require('./calculateDistance');


// converts input to Uppercase first word letters
async function renderIndex(req, res) {
    
	// this has to be set after login, now it's hardcoded
	req.session._id = '5e67a328ad68fa647500239c'

	const dbData = await mongo.findOneInDb('fakeUsers', req.session._id)
	const {timestamp} = dbData[0].location

	res.render("pages/index", {lastUpdateTime: dateFormat(timestamp)})

}

async function renderMatches(req, res){

    // this has to be set after login, now it's hardcoded
    req.session._id = '5e67a328ad68fa647500239c'
    
    const thisUser = await mongo.findOneInDb('fakeUsers', req.session._id)
    const {latitude:userLat, longitude:userLong} = thisUser[0].location

    const allOtherUserData = await mongo.findCollectionInDb('fakeUsers', req.session._id)

    let locationIsAvailable = false

    if (!userLat && !userLong) {
        const newData = allOtherUserData.map(dbResult => {
            return { ...dbResult, location: null }
        })
        res.render("pages/matches", { matches: newData, locationIsAvailable });
    }

    else {
        locationIsAvailable = true

        const newData = allOtherUserData.map(dbResult => {
            const { location: { latitude: dbLat, longitude: dbLong } } = dbResult
            return { ...dbResult, location: calcDistance.getDistanceFromLatLonInKm(dbLat, dbLong, userLat, userLong) }
        })

        newData.sort((a, b) => a.location - b.location);

        res.render("pages/matches", { matches: newData, locationIsAvailable });
    }
}

module.exports = { renderIndex, renderMatches }
