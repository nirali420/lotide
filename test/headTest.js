const assert = require('chai').assert;
const head = require('../head');

describe("#head", function() {
	it("returns 1 for the array of [1,2,3]", () => {
		assert.strictEqual(head([1, 2, 3]), 1)
	});

	it('returns Hello for the array of ["hello", "lighthouse", "labs"]', () => {
		assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
	});

	it('returns "5" for the array of ["5"]', () => {
		assert.strictEqual(head(["5"]), "5");
	});
});