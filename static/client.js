import cleanedCityData from '/cleanedCityData.js'

const userTrigger = document.getElementById("getUserLocationTrigger")
const storeUserLocation = document.getElementById("userLocation")
const submitUserLocationForm = document.getElementById('submitUserLocation')
const customLocationTrigger = document.getElementById('getCustomLocation')
const customLocationSuggestions = document.getElementById('customLocationSuggestions')
const locationSuggestions = document.getElementsByClassName('locationSuggestion')

// listen to button click
userTrigger.addEventListener('click', getLocationTrigger)
customLocationTrigger.addEventListener('keydown', getCustomLocation)

// gets triggered when Get Location button is clicked
async function getLocationTrigger(e) {
    const getLocation = await userLocation()

    // stores location in hidden input
    storeLocation(getLocation)
}


// gets triggered when custom location input is getting filled
function getCustomLocation(e) {

    // converts user input to uppercase letter words
    const correctedInputValue = upperCaseCorrection(e.target.value + e.key)
    const preventKeys = ['ArrowDown', 'Tab']

    // if inputvalue is longer than 2 and last typed key is not a key in preventKeys
    if (correctedInputValue.length > 1 && !preventKeys.includes(e.key)) {

        // filter all results of json data with the typed value
        const results = cleanedCityData.filter(item => item.woonplaats.includes(correctedInputValue));

        // removes previous suggestions
        clearSuggestions()

        // loop over filtered result
        results.map((x, index) => {

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
        HTMLCollectionToArray.map((x, index) => {
           
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
    customLocationTrigger.value = e.target.innerText

    // removes suggestions
    clearSuggestions()

    // stores location in hidden input
    storeLocation(location)
}

// store location in hidden input
function storeLocation(location) {

    // store data in input hidden field
    storeUserLocation.value = stringify(location)

    // enable submit button
    submitUserLocationForm.disabled = false
}

// get user location from GEO API
async function userLocation() {

    // waits for GEO location api to resolve promise
    const data = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });

    return { latitude: data.coords.latitude, longitude: data.coords.longitude }
}

// converts data to JSON
function stringify(data) {
    return JSON.stringify(data)
}

// converts JSON to data 
function parse(json) {
    return JSON.parse(json)
}

// converts input to Uppercase first word letters
function upperCaseCorrection(input) {
    // source: https://stackoverflow.com/a/4878800
    const newInput = input.toLowerCase()
        .split(' ')
        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
        .join(' ');

    return newInput
}

// removes suggestions
function clearSuggestions() {
    customLocationSuggestions.innerHTML = ""
}


