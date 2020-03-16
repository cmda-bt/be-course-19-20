const cityData = require('../static/data/cleanedCityData.json');

// search for 1 specific value
function findExactCityData(value) {
    return cityData.find(item => item.woonplaats === value)
}

// search for multiple matching values
function findFilteredCityData(value) {
    return cityData.filter(item => item.woonplaats.includes(value));
}

module.exports = { findExactCityData, findFilteredCityData }
