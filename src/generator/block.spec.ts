import { expect, assert } from "chai";
import { IBlock, Block } from "./block";
import { bracesCounter } from "../utils/helpers";
describe("Block: ", () => {
	it("should replace sub patterns", () => {
		const pattern = "{name:string,birth:{city:string,year:number}}";
		const block = new Block(pattern);
		const newPattern = block.replaceSubPatterns(
			"{city:string,year:number}",
			"abc123"
		);
		expect(newPattern).to.eq("{name:string,birth:abc123}");
	});
	it("should replace two sub patterns and keep the backup pattern", () => {
		const pattern =
			"{name:string,birth:{city:string},email:{bussines:string}}";
		const block = new Block(pattern);
		let newPattern = block.replaceSubPatterns("{city:string}", "b1");
		expect(newPattern).to.eq(
			"{name:string,birth:b1,email:{bussines:string}}"
		);
		expect(block.lockedPattern).to.eq(
			"{name:string,birth:{city:string},email:{bussines:string}}"
		);
		newPattern = block.replaceSubPatterns("{bussines:string}", "c1");
		expect(newPattern).to.eq("{name:string,birth:b1,email:c1}");
		expect(block.lockedPattern).to.eq(
			"{name:string,birth:{city:string},email:{bussines:string}}"
		);
	});
	it("should generate json response", () => {
		const pattern = "{name:string,city:string}";
		const block = new Block(pattern);
		expect(block.generate()).to.deep.eq({ name: "string", city: "string" });
	});
	it("should replace two sub patterns and generate json", () => {
		const pattern =
			"{day:string,year:{format:string,utc:string},email:{a:string,b:string}}";
		const block = new Block(pattern);
		block.replaceSubPatterns("{format:string,utc:string}", "abc123");
		block.replaceSubPatterns("{a:string,b:string}", "xyz123");
		const generated = block.generate();
		expect(generated).to.deep.eq({
			day: "string",
			year: "abc123",
			email: "xyz123",
		});
	});
	it("blocks should work together", () => {
		const blockA = new Block(
			"{name:string,birth:{day:string,year:{format:string,utc:string},month:{name:string}}}"
		);
		const blockB = new Block(
			"{day:string,year:{format:string,utc:string},month:{name:string}}"
		);
		const blockC = new Block("{format:string,utc:string}");
		const blockD = new Block("{name:string}");
		blockB.replaceSubPatterns(blockC.lockedPattern, "c");
		expect(blockB.pattern).to.eq("{day:string,year:c,month:{name:string}}");
		blockB.replaceSubPatterns(blockD.lockedPattern, "d");
		expect(blockB.pattern).to.eq("{day:string,year:c,month:d}");
		blockA.replaceSubPatterns(blockB.lockedPattern, "b");
		expect(blockA.pattern).to.eq("{name:string,birth:b}");
		expect(blockC.generate()).to.deep.eq({
			format: "string",
			utc: "string",
		});
		expect(blockD.generate()).to.deep.eq({
			name: "string",
		});
		expect(blockB.generate()).to.deep.eq({
			day: "string",
			year: "c",
			month: "d",
		});
		expect(blockA.generate()).to.deep.eq({
			name: "string",
			birth: "b",
		});
	});
});
