// get user location from GEO API
async function userLocation() {
  // waits for GEO location api to resolve promise
  const data = await new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject)
  })

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
  const newInput = input
    .toLowerCase()
    .split(' ')
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(' ')

  return newInput
}

// removes suggestions
function removeFromDOM(DOMElement) {
  DOMElement.innerHTML = ''
}

function addValueToInput(DOMElement, newValue) {
  DOMElement.value = newValue
}

export {
  userLocation,
  stringify,
  parse,
  upperCaseCorrection,
  removeFromDOM,
  addValueToInput,
}
