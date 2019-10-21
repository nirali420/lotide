const assertEqual = function (actual, expected) {
	if (actual === expected) {
		console.log(`✅✅ Assertion Passed: ${actual} === ${expected}`);
	} else {
		console.log(`🚫🚫 Assertion Failed: ${actual} !== ${expected}`);
	}
};

//letters is the array of letters in the string
// count is the number of times it appears
const countLetters = function (letters, finalCount) {
	// create an array out of string
	const lettersArray = letters.split("");
	const count = {};
	// loop through the array to check the count
	for (let eachLetter of letters) {
		if (count[eachLetter]) {
			count[eachLetter] += 1;
		} else {
			count[eachLetter] = 1
		}
	}
	// display an object with all the letters and their count
	return count;
}