const expect = require("chai").expect;
const assertArraysEqual = require('../assertArraysEqual');

describe("#assertArrayEqual", () => {
	it("should display true if the [1,2,3] is equal to [1,2,3]", () => {
		expect(true).to.eql(assertArraysEqual([1, 2, 3], [1, 2, 3]))
	});

	it("should display false if the [1,2,3] is not equal to [3,2,1]", () => {
		expect(false).to.eql(assertArraysEqual([1, 2, 3], [3, 2, 1]))
	});

	it("should display false if the ['1', '2', '3'] is not equal to ['1', 2, 3]", () => {
		expect(false).to.eql(assertArraysEqual(['1', '2', '3'], ['1', 2, 3]))
	});
});