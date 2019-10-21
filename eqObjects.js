const assertEqual = function (actual, expected) {
	if (actual === expected) {
		console.log(`✅✅ Assertion Passed: ${actual} === ${expected}`);
	} else {
		console.log(`🚫🚫 Assertion Failed: ${actual} !== ${expected}`);
	}
};
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function (obj1, obj2) {
	let objValue = true

	// Compare the length of the object
	if (Object.keys(obj1).length !== Object.keys(obj2).length) {
		return false;
	} else {
		for (let key in obj1) {
			// comparing arrays as values
			if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
				if (obj1[key].length != obj2[key].length) {
					return false;
				}
				for (let i = 0; i < obj1[key].length; i++) {
					if (obj1[key][i] !== obj2[key][i]) {
						return false;
					}
				}
			} else {
				// Compare the values of the object
				if (obj1[key] !== obj2[key]) {
					return false;
				}
			}
		}
	}

	return true;
}

const ab = {
	a: "1",
	b: "2"
};
const ba = {
	b: "2",
	a: "1",
};
assertEqual((eqObjects(ab, ba)), true) // => should PASS

const abc = {
	a: "1",
	b: "2",
	c: "3"
};
assertEqual((eqObjects(ab, abc)), false) // => false

const cd = {
	c: "1",
	d: ["2", 3]
};
const dc = {
	d: ["2", 3],
	c: "1"
};
assertEqual((eqObjects(cd, dc)), true); // => true

const cd2 = {
	c: "1",
	d: ["2", 3, 4]
};
assertEqual((eqObjects(cd, cd2)), false); // => false