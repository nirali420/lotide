const tail = require('../tail');
const assert = require("chai").assert;
const expect = require("chai").expect
describe("#tail", () => {
	it("should return 6 when grabbing index 0 of [5,6,7]", () => {
		assert.equal(tail([5, 6, 7])[0], 6)
	});
	it("should return [6,7] when given array [5,6,7]", () => {
		expect(tail([5, 6, 7])).to.eql([6, 7])
	});
});