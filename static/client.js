import cleanedCityData from './data/cleanedCityData.js'
import { userLocation, stringify, upperCaseCorrection, removeFromDOM, addValueToInput } from './modules/helper.js';

const userTrigger = document.getElementById("getUserLocationTrigger")
const storeUserLocation = document.getElementById("userLocation")
const submitUserLocationForm = document.getElementById('submitUserLocation')
const customLocationTrigger = document.getElementById('getCustomLocation')
const customLocationSuggestions = document.getElementById('customLocationSuggestions')
const locationSuggestions = document.getElementsByClassName('locationSuggestion')
const disableUserLocation = document.getElementById('disableUserLocation')

// listen to button click
userTrigger.addEventListener('click', getLocationTrigger)
customLocationTrigger.addEventListener('keydown', getCustomLocation)
disableUserLocation.addEventListener('click', disableLocation)


// gets triggered when custom location input is getting filled
function getCustomLocation(e) {

    // converts user input to uppercase letter words
    const correctedInputValue = upperCaseCorrection(e.target.value + e.key)
    const preventKeys = ['ArrowDown', 'Tab']

    // if inputvalue is longer than 2 and last typed key is not a key in preventKeys
    if (correctedInputValue.length > 1 && !preventKeys.includes(e.key)) {

        // filter all results of json data with the typed value
        const filteredData = cleanedCityData.filter(item => item.woonplaats.includes(correctedInputValue));

        // removes previous suggestions
        removeFromDOM(customLocationSuggestions)

        // loop over filtered result
        filteredData.map((x, index) => {

            // only first 5 maps of results
            if (index < 5) {
                const location = { latitude: x.latitude, longitude: x.longitude }
                const stringified = stringify(location)

                // renders suggestions
                customLocationSuggestions.insertAdjacentHTML('beforeend', `<button class="locationSuggestion" data-location='${stringified}'>${x.woonplaats}</button>`)
            }
        })

        // converts classes a.k.a HTMLCollection to mappable array
        const HTMLCollectionToArray = Array.from(locationSuggestions)

        // loop over classes
        HTMLCollectionToArray.map((x) => {

            // create eventListener for buttons
            x.addEventListener('click', suggestedLocationTrigger);
        })
    }
}

// gets triggered when suggested location is clicked
function suggestedLocationTrigger(e) {

    // get location from event parameter
    const location = e.target.dataset.location

    // gives feedback to user, shows what is clicked in input
    addValueToInput(customLocationTrigger, e.target.innerText)

    // removes suggestions
    removeFromDOM(customLocationSuggestions)

    // stores location in hidden input
    storeLocation(location)
}

// gets triggered when disableUserLocation is clicked
function disableLocation() {

    // stores location in hidden input
    storeLocation(false)
}

// store location in hidden input
function storeLocation(location) {

    // store data in input hidden field
    addValueToInput(storeUserLocation, stringify(location))

    // enable submit button
    submitUserLocationForm.disabled = false
}

// gets triggered when Get Location button is clicked
async function getLocationTrigger() {
    const getLocation = await userLocation()

    // stores location in hidden input
    storeLocation(getLocation)
}