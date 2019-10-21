const assertEqual = function(actual, expected) {
	if (actual === expected) {
		console.log(`✅✅ Assertion Passed: ${actual} === ${expected}`);
	} else {
		console.log(`🚫🚫 Assertion Failed: ${actual} !== ${expected}`);
	}
};

const eqArrays = function(array1, array2) {
	let temp = false;
	if (array1.length != array2.length) {
		return false;
	} else {
		for (let i = 0; i < array1.length; i++) {
			if (array1[i] !== array2[i]) {
				return false;
			} else {
				temp = true;
			}
		}

		if (temp === true) {
			return true;
		}
	}
}

const letterPositions = function(sentence) {
	const results = {};
	let i = 0;
	// logic to update results here
	// create an array from the sentence string
	const sentenceArray = sentence.split("");
	// loop through the array
	for (let eachLetter of sentence) {
		if (eachLetter !== " ") {
			if (results[eachLetter]) {
				// create new array with the index position of each letter
				results[eachLetter].push(i);
			} else {
				results[eachLetter] = [i]
			}
		}
		// create an object with all the letters and array of positions
		i += 1;
	}
	return results;
};

letterPositions("lighthouse in the house");