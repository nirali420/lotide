const without = function(words, noword) {
	const finalWords = words;
	for (let i = 0; i < noword.length; i++) {
		let index = finalWords.indexOf(noword[i])
		if (index > -1) {
			finalWords.splice(index, 1);
		}
	}
	return finalWords
}

const words = ["hello", "world", "lighthouse"];
without(["hello", "world", "lighthouse"], ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);