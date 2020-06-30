import { expect, assert } from "chai";
import { IBlock, Block, FormatString } from "./block";
describe("Reader: ", () => {
	it(".run....", () => {
		const s = "{name:string,age:number}";
		const r = new Block(s);
	});
});

describe("FormatString: ", () => {
	it("format single value", () => {
		const string = "{name:string}";
		const f = new FormatString(string);
		f.format();
		expect(f.getResponse()).to.deep.equal({ name: "string" });
	});
	it("format two values", () => {
		const string = "{name:string,age:number}";
		const f = new FormatString(string);
		f.format();
		expect(f.getResponse()).to.deep.equal({
			name: "string",
			age: "number",
		});
	});
	it("format with option", () => {
		const string = "{name:string,age:number,$times:4}";
		const f = new FormatString(string);
		f.format();
		const expected = {
			name: "string",
			age: "number",
			$times: "4",
		};
		expect(f.getResponse()).to.deep.equal(expected);
	});
	it("format nested response", () => {
		const string = "{name:string,age:number,data:{age:number,city:string}}";
		const f = new FormatString(string);
		f.format();
		const expected = {
			name: "string",
			age: "number",
			data: "{age:number,city:string}",
		};
		// expect(f.getResponse()).to.deep.equal(expected)
	});
});

// {name:string,age:number,data:{code:string,access:boolean}}
