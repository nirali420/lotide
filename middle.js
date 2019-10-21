const middle = function(array) {
	let temp = []
	if (array.length === 1 || array.length === 2) {
		return temp;
	} else if (array.length % 2 === 0) {
		temp.push(array[((array.length / 2) - 1)]);
		temp.push(array[(array.length / 2)]);
		return temp;
	} else {
		temp.push(array[Math.floor(array.length / 2)]);
		return temp;
	}
}

module.exports = middle;