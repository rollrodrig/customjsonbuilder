import { expect, assert } from "chai";
import { DataStorage } from "./generator";
import { stub } from "sinon";
import { ValueGeneratorFactory } from "./value";
import {
	FormatString,
	ResponseDict,
	ResponseList,
	ValueGenerator,
} from "./format-string";

describe("FormatString: ", () => {
	let stub1: any;
	let stub2: any;
	before(function () {
		stub1 = stub(ResponseDict.prototype, "generate").callsFake((): any => {
			return { name: "string", age: "number" };
		});
		stub2 = stub(ResponseList.prototype, "generate").callsFake((): any => {
			return [
				{ name: "string", age: "number" },
				{ name: "string", age: "number" },
			];
		});
	});
	after(function () {
		stub1.restore();
		stub2.restore();
	});
	it("should return dict response", () => {
		const string = "{name:string,age:number}";
		const f = new FormatString(string);
		f.generate();
		expect(f.response).to.deep.equal({ name: "string", age: "number" });
	});
	it("should return list with two dict", () => {
		const string = "{name:string,age:number,$times:2}";
		const f = new FormatString(string);
		f.generate();
		const expected = [
			{ name: "string", age: "number" },
			{ name: "string", age: "number" },
		];
		expect(f.response).to.deep.equals(expected);
	});
});
describe("ResponseDict: ", () => {
	let stub1: any;
	before(function () {
		stub1 = stub(ValueGenerator.prototype, "generate").callsFake(
			(value): any => {
				return value;
			}
		);
	});
	after(function () {
		stub1.restore();
	});
	it("should generate json with single value", () => {
		const string = "{name:string}";
		const f = new ResponseDict(string);
		f.generate();
		expect(f.response).to.deep.equal({ name: "string" });
	});
	it("should generate json with two value", () => {
		const string = "{name:string,age:number}";
		const f = new ResponseDict(string);
		f.generate();
		expect(f.response).to.deep.equal({
			name: "string",
			age: "number",
		});
	});
	it("should keep the last repeated value", () => {
		const string = "{name:string,age:number,age:string}";
		const f = new ResponseDict(string);
		f.generate();
		const expected = {
			name: "string",
			age: "string",
		};
		expect(f.response).to.deep.equal(expected);
	});
});
describe("ResponseList: ", () => {
	let stub1: any;
	before(function () {
		stub1 = stub(ValueGenerator.prototype, "generate").callsFake(
			(value): any => {
				return value;
			}
		);
	});
	after(function () {
		stub1.restore();
	});
	it("should generate array with 2 responses", () => {
		const string = "{name:string,age:number,$times:2,city:lima}";
		const res = new ResponseList(string);
		res.generate();
		const expected: any = [
			{ name: "string", age: "number", city: "lima" },
			{ name: "string", age: "number", city: "lima" },
		];
		expect(res.response).to.deep.equal(expected);
	});
	it("should generate array with 3 responses", () => {
		const string = "{name:string,age:number,$times:3,city:lima}";
		const res = new ResponseList(string);
		res.generate();
		const expected: any = [
			{ name: "string", age: "number", city: "lima" },
			{ name: "string", age: "number", city: "lima" },
			{ name: "string", age: "number", city: "lima" },
		];
		expect(res.response).to.deep.equal(expected);
	});
	it("times = -23, should generate array with 1 responses", () => {
		const string = "{name:string,age:number,$times:-23,city:lima}";
		const res = new ResponseList(string);
		res.generate();
		const expected: any = [{ name: "string", age: "number", city: "lima" }];
		expect(res.response).to.deep.equal(expected);
	});
	it("times = 0, should generate array with 1 responses", () => {
		const string = "{name:string,age:number,$times: 0,city:lima}";
		const res = new ResponseList(string);
		res.generate();
		const expected: any = [{ name: "string", age: "number", city: "lima" }];
		expect(res.response).to.deep.equal(expected);
	});
	it("wrong times format, should generate array with 1 responses", () => {
		const string = "{name:string,age:number,$times,city:lima}";
		const res = new ResponseList(string);
		res.generate();
		const expected: any = [{ name: "string", age: "number", city: "lima" }];
		expect(res.response).to.deep.equal(expected);
	});
});
describe("ValueGenerator: ", () => {
	let stub1: any;
	before(function () {
		stub1 = stub(ValueGeneratorFactory.prototype, "get").callsFake(
			(value): any => {
				return value;
			}
		);
	});
	after(function () {
		stub1.restore();
	});
	it("should return staic value", () => {
		const v = new ValueGenerator();
		expect(v.generate("string")).to.equal("string");
		expect(v.generate("number")).to.equal("number");
	});
	it("should return json as response", () => {
		const v = new ValueGenerator();
		const storage = DataStorage.getInstance();
		storage.add("abc", { name: "jhon", age: "18" });
		expect(v.generate("___VAL___abc")).to.deep.eq({
			name: "jhon",
			age: "18",
		});
	});
});
