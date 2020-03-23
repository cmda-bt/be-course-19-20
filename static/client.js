import cityData from './data/onlyCityData.js'
import {
  userLocation,
  stringify,
  upperCaseCorrection,
  removeFromDOM,
  addValueToInput,
} from './modules/helper.js'

const storeUserLocation = document.getElementById('userLocation')
const submitUserLocationForm = document.getElementById('submitUserLocation')
const customLocationTrigger = document.getElementById('getCustomLocation')
const locationSuggestions = document.getElementById('locationSuggestions')
const locationFormInputs = document.getElementById('locationInputTypes')

function setGeoLocationButtonInForm() {
  locationFormInputs.insertAdjacentHTML(
    'afterbegin',
    `
       <    utton id="getUserLocationByGeoAPI"></button> 
    `,
  )

  document
    .getElementById('getUserLocationByGeoAPI')
    .addEventListener('click', getLocationTrigger)
}
setGeoLocationButtonInForm()

// listen to button click
customLocationTrigger.addEventListener('keydown', getCustomLocation)

// gets triggered when custom location input is getting filled
function getCustomLocation(e) {
  // converts user input to uppercase letter words
  const correctedInputValue = upperCaseCorrection(e.target.value + e.key)
  const preventKeys = ['ArrowDown', 'Tab']

  // if inputvalue is longer than 2 and last typed key is not a key in preventKeys
  if (correctedInputValue.length > 1 && !preventKeys.includes(e.key)) {
    // filter all results of json data with the typed value
    const filteredData = cityData.filter((item) =>
      item.includes(correctedInputValue),
    )

    // removes previous suggestions
    removeFromDOM(locationSuggestions)

    // loop over filtered result
    filteredData.map((x, index) => {
      // only first 5 maps of results
      if (index < 5) {
        // renders suggestions
        locationSuggestions.insertAdjacentHTML(
          'beforeend',
          `
                    <input type="radio" id="${x}" name="userSuggestion" value="${x}" ${
            index === 0 ? 'tabindex="0"' : ''
          }>   
                    <label for="${x}">${x}</label>`,
        )
      }
    })

    // converts classes a.k.a HTMLCollection to mappable array
    const HTMLCollectionToArray = Array.from(locationSuggestions)

    // loop over classes
    HTMLCollectionToArray.map((x) => {
      // create eventListener for buttons
      x.addEventListener('click', suggestedLocationTrigger)
    })
  } else if (preventKeys.includes(e.key)) {
    console.log('preventkey ' + e.key)
    const suggestionInput = document.getElementsByClassName(
      'suggestionInput',
    )[0]
    // const suggestionInput = document.getElementById('noLocation')
    console.log(suggestionInput)
    suggestionInput.focus()
  }
}

// gets triggered when suggested location is clicked
function suggestedLocationTrigger(e) {
  // get location from event parameter
  const location = e.target.dataset.location

  // gives feedback to user, shows what is clicked in input
  addValueToInput(customLocationTrigger, e.target.innerText)

  // removes suggestions
  removeFromDOM(locationSuggestions)

  // stores location in hidden input
  storeLocation(location)
}

// store location in hidden input
function storeLocation(location) {
  // store data in input hidden field
  addValueToInput(storeUserLocation, stringify(location))

  console.log('API data is added')
}

// gets triggered when Get Location button is clicked
async function getLocationTrigger(e) {
  //prevents form from submitting
  e.preventDefault()

  submitUserLocationForm.disabled = true

  // fetch Geo Location
  const getLocation = await userLocation().then((x) => {
    // enable submit button
    submitUserLocationForm.disabled = false
    document
      .getElementById('getUserLocationByGeoAPI')
      .setAttribute('class', 'clicked')
    return x
  })

  // stores location in hidden input
  storeLocation(getLocation)
}
