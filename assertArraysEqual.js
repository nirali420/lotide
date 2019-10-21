const assertArraysEqual = function(array1, array2) {
	let temp = false;
	if (array1.length !== array2.length) {
		return false;
	}
	for (let i = 0; i < array1.length; i++) {
		if (array1[i] !== array2[i]) {
			return false;
		}
	}
	return true;
}

module.exports = assertArraysEqual;