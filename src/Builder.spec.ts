import { expect, assert } from "chai";
import CustomJsonBuilder from "./builder";
import { Error } from "./builder";
describe("CustomJsonBuilder", () => {
	it("should return the json ", () => {
		const input = `
			{
				name: firstname,
				age: number,
			}
		`;
		const res = CustomJsonBuilder.build(input);
		assert.isString(res.name);
		assert.isNumber(res.age);
	});
	it("should return an error message ", () => {
		const input = `
			{
				name: firstname,
				age: number
		`;
		const res = CustomJsonBuilder.build(input);
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
		const res = CustomJsonBuilder.build(input);
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
		const res = CustomJsonBuilder.build(input);
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
		const res = CustomJsonBuilder.build(input);
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
		const res = CustomJsonBuilder.build(pattern);
		assert.isObject(res);
		assert.isObject(res.a1);
		assert.isObject(res.a1.a2);
		assert.isObject(res.a1.a2.a3);
		assert.isObject(res.a1.a2.a3.a4);
		assert.isObject(res.a1.a2.a3.a4.a5);
		assert.isNumber(res.a1.a2.a3.a4.a5.a6);
	});
	it("shoudl generate nested array wit nested object", () => {
		const pattern = `
			{
				user: word,
				posts:{
					id:number,
					comments:{
						id: number,
						content: word,
						$times: 2,
					},
					$times: 3,
				}
			}
		`;
		const res = CustomJsonBuilder.build(pattern);
		assert.isArray(res.posts);
		assert.isObject(res.posts[0]);
		assert.isArray(res.posts[0].comments);
		assert.isObject(res.posts[0].comments[0]);
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
		const res = CustomJsonBuilder.build(pattern);
		assert.isString(res.name);
		assert.isNumber(res.age.year);
		assert.isObject(res.age.city);
		assert.isString(res.age.city.place);
	});
});
describe("Many test examples", () => {
	it("shuld return date", () => {
		const pattern = `
			{
				name:name,
				password:password,
				date:date,
			}
		`;
		const res = CustomJsonBuilder.build(pattern);
		assert.isString(res.name);
		assert.isString(res.password);
		assert.isString(res.date);
		expect(res.password).not.equal("password");
		expect(res.date).not.equal("date");
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
