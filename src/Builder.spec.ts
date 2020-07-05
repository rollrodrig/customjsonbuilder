import { expect, assert } from "chai";
import Builder from "./builder";
import { Error } from "./builder";
describe("Builder", () => {
	it("should return the json ", () => {
		const input = `
			{
				name: firstname,
				age: number
			}
		`;
		const builder = new Builder();
		const res = builder.run(input);
		assert.isString(res.name);
		assert.isNumber(res.age);
	});
	it("should return an error message ", () => {
		const input = `
			{
				name: firstname,
				age: number
		`;
		const builder = new Builder();
		const res = builder.run(input);
		expect(res).to.deep.eq({
			error: "There is one missing ] or [ or } or {",
		});
	});
	it("should return nested object", () => {
		const input = `
			{
				name:string,
				age:{
					year:number
				},
				id:{
					main:number,
					second:number
				}
			}
	    `;
		const builder = new Builder();
		const res = builder.run(input);
		assert.isString(res.name);
		assert.isObject(res.age);
		assert.isNumber(res.age.year);
		assert.isObject(res.id);
		assert.isNumber(res.id.main);
		assert.isNumber(res.id.second);
	});
	it("should return nested array", () => {
		const input = `
			{
				user:name,
				posts:{
					id:number,
					title:string,
					$times:3
				}
			}
		`;
		const builder = new Builder();
		const res = builder.run(input);
		assert.isString(res.user);
		assert.isArray(res.posts);
		assert.equal(res.posts.length, 3);
	});
	it("should return array", () => {
		const input = `
			{
				id:number,
				name:firstname,
				$times:3
			}
		`;
		const builder = new Builder();
		const res = builder.run(input);
		assert.isArray(res);
		assert.equal(res.length, 3);
		assert.isNumber(res[0].id);
		assert.isString(res[0].name);
	});
	it("should super deep nested object", () => {
		const pattern = `
			{
				a1:{
					a2:{
						a3:{
							a4:{
								a5:{
									a6:number
								}
							}
						}
					}
				}
			}
		`;
		const builder = new Builder();
		const res = builder.run(pattern);
		assert.isObject(res);
		assert.isObject(res.a1);
		assert.isObject(res.a1.a2);
		assert.isObject(res.a1.a2.a3);
		assert.isObject(res.a1.a2.a3.a4);
		assert.isObject(res.a1.a2.a3.a4.a5);
		assert.isNumber(res.a1.a2.a3.a4.a5.a6);
	});
	it("nice example 1", () => {
		const pattern = `
			{
				name:string,
				age:{
					year:number,
					city:{
						place:string
					}
				}
			}
		`;
		const builder = new Builder();
		const res = builder.run(pattern);
		assert.isString(res.name);
		assert.isNumber(res.age.year);
		assert.isObject(res.age.city);
		assert.isString(res.age.city.place);
	});
});
describe("Error: ", () => {
	it(".missingBrances: should print error braquest message", () => {
		const expected = {
			error: "There is one missing ] or [ or } or {",
		};
		expect(Error.missingBrances()).to.deep.eq(expected);
	});
});
