const eqObjects = function(obj1, obj2) {
	// Compare the length of the object
	if (Object.keys(obj1).length !== Object.keys(obj2).length) {
		return "The length of the objects are not equal";
	} else {
		for (let key in obj1) {
			// comparing arrays as values
			if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
				if (obj1[key].length != obj2[key].length) {
					return "The arrays within the object are not equal";
				}
				for (let i = 0; i < obj1[key].length; i++) {
					if (obj1[key][i] !== obj2[key][i]) {
						return "The items in array within the object are not equal";
					}
				}
			} else {
				// Compare the values of the object
				if (obj1[key] !== obj2[key]) {
					return "The values in the object are not equal";
				}
			}
		}
	}
	return "The objects are exact match.";
}

const ab = {
	a: "1",
	b: "2"
};
const ba = {
	b: "2",
	a: "1",
};
eqObjects(ab, ba) // => should PASS

const abc = {
	a: "1",
	b: "2",
	c: "3"
};
eqObjects(ab, abc) // => false

const cd = {
	c: "1",
	d: ["2", 3]
};
const dc = {
	d: ["2", 3],
	c: "1"
};
eqObjects(cd, dc); // => true

const cd2 = {
	c: "1",
	d: ["2", 3, 4]
};
eqObjects(cd, cd2); // => false