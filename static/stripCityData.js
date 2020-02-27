import originalCityData from './data/originalCityData.js'

// store unique items in this array
let newArray = []

// map over all originalCityData keys
originalCityData.map((x, index) => {

    // check if value is equal to eachother
    const searchValue = newArrayItem => {
        return newArrayItem.woonplaats === x.woonplaats;
    }
    
    // if map is at last loop
    if (index + 1 === originalCityData.length) {
        console.log(stringify(newArray));
    }

    // if map doesn't exist in newArray
    if (!newArray.find(searchValue)) {

        // push unique item in newArray
        newArray.push(x)
        return
    }
    return
})


// stringify data
function stringify(data) {
    return JSON.stringify(data)
}

// result is stored in cleanedCityData.js
// original data length = 4699
// new data length = 2384