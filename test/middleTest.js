const middle = require("../middle");
const expect = require("chai").expect;
describe("#middle", () => {
	it("should return empty array if array contains one value", () => {
		expect(middle([1])).to.eql([]);
	})
	it("should return empty array if array contains two values", () => {
		expect(middle([1, 2])).to.eql([]);
	})
	it("should return 2 in an array if given array [1,2,3]", () => {
		expect(middle([1, 2, 3])).to.eql([2]);
	})
	it("should return [3,4] if given array [1,2,3,4,5,6]", () => {
		expect(middle([1, 2, 3])).to.eql([2]);
	})
})