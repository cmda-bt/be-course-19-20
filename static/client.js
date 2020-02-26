const userTrigger = document.getElementById("getUserLocationTrigger")
const storeUserLocation = document.getElementById("userLocation")
const submitUserLocationForm = document.getElementById('submitUserLocation')


// listen to button click
userTrigger.addEventListener('click', getLocationTrigger)

// gets triggered when button is clicked
async function getLocationTrigger(e) {
    const getLocation = await userLocation()

    // store data in input hidden field
    storeUserLocation.value = stringify(getLocation)

    // enable submit button
    submitUserLocationForm.disabled = false
}

// get user location from GEO API
async function userLocation() {

    // waits for GEO location api to resolve promise
    const data = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
    
    return {latitude: data.coords.latitude, longitude: data.coords.longitude }
}

// converts data to JSON
function stringify(data) {
    return JSON.stringify(data)
}