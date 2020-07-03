import { expect, assert } from "chai";
import { IBlock, Block } from "./block";
const bracesCounter = (pattern: string) => {
	const l = pattern.length;
	const left = [];
	const right = [];
	for (let x = 0; x < l; x++) {
		const char = pattern.charAt(x);
		if (char === "{") {
			left.push(x);
		}
		if (char === "}") {
			right.push(x);
		}
	}
	console.log(left);
	console.log(right);
};
describe("Block: ", () => {
	it("should cut its own pattern and keep a copy", () => {
		const pattern =
			"{name:string,birth:{day:string,year:string},city:string}";
		// bracesCounter(pattern);
		const block = new Block();
		block.pattern = pattern;
		block.setLeftRange(19);
		block.setRightRange(42);
		const newPattern = block.cutItsLocalPattern();
		expect(newPattern).to.eq("{day:string,year:string}");
		expect(block.lockedPattern).to.eq("{day:string,year:string}");
	});
	it("should replace sub patterns", () => {
		const pattern =
			"{n:s,b:{day:string,year:{format:string,utc:string}},c:s}";
		// bracesCounter(pattern);
		const block = new Block();
		block.pattern = pattern;
		block.setLeftRange(7);
		block.setRightRange(50);
		const newPattern = block.replaceSubPatterns(
			"{format:string,utc:string}",
			"abc123"
		);
		expect(newPattern).to.eq("{n:s,b:{day:string,year:abc123},c:s}");
	});
	it("should replace two sub patterns and keep its own pattern with the copy", () => {
		const pattern =
			"{n:s,b:{day:string,year:{format:string,utc:string},email:{a:string,b:string}},c:s}";
		// bracesCounter(pattern);
		const block = new Block();
		block.pattern = pattern;
		block.setLeftRange(7);
		block.setRightRange(76);
		let newPattern = block.cutItsLocalPattern();
		expect(newPattern).to.eq(
			"{day:string,year:{format:string,utc:string},email:{a:string,b:string}}"
		);
		newPattern = block.replaceSubPatterns(
			"{format:string,utc:string}",
			"abc123"
		);
		expect(newPattern).to.eq(
			"{day:string,year:abc123,email:{a:string,b:string}}"
		);
		newPattern = block.replaceSubPatterns("{a:string,b:string}", "xyz123");
		expect(newPattern).to.eq("{day:string,year:abc123,email:xyz123}");
		expect(block.lockedPattern).to.eq(
			"{day:string,year:{format:string,utc:string},email:{a:string,b:string}}"
		);
	});
	it("should generate json response", () => {
		const pattern =
			"{name:string,birth:{day:string,year:string},city:string}";
		const block = new Block();
		block.pattern = pattern;
		block.setLeftRange(19);
		block.setRightRange(42);
		block.cutItsLocalPattern();
		expect(block.generate()).to.deep.eq({ day: "string", year: "string" });
	});
	it("should replace two sub patterns and generate json", () => {
		const pattern =
			"{n:s,b:{day:string,year:{format:string,utc:string},email:{a:string,b:string}},c:s}";
		const block = new Block();
		block.pattern = pattern;
		block.setLeftRange(7);
		block.setRightRange(76);
		block.cutItsLocalPattern();
		block.replaceSubPatterns("{format:string,utc:string}", "abc123");
		block.replaceSubPatterns("{a:string,b:string}", "xyz123");
		const generated = block.generate();
		expect(generated).to.deep.eq({
			day: "string",
			year: "abc123",
			email: "xyz123",
		});
	});
});
