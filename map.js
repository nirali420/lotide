const assertArraysEqual = function(array1, array2) {
	let temp = false;
	if (array1.length != array2.length) {
		return "The length of the arrays are not equal";
	}
	for (let i = 0; i < array1.length; i++) {
		if (array1[i] !== array2[i]) {
			return "The items in the array do not match each other";
		}
	}
	return "The arrays are exact match.";
}

const eqArrays = function(array1, array2) {
	let temp = false;
	if (array1.length != array2.length) {
		return false;
	}
	for (let i = 0; i < array1.length; i++) {
		if (array1[i] !== array2[i]) {
			return false;
		}
	}
	return true;

}


const map = function(array, callback) {
	const results = [];
	for (let item of array) {
		results.push(callback(item));
	}
	return results;
}

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
console.log(results1);