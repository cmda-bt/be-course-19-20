// converts input to Uppercase first word letters
function upperCaseCorrection(input) {
	// source: https://stackoverflow.com/a/4878800
	const newInput = input.toLowerCase()
		.split(' ')
		.map((s) => s.charAt(0).toUpperCase() + s.substring(1))
		.join(' ');

	return newInput
}

module.exports = { upperCaseCorrection }
