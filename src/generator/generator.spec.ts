import { expect, assert } from "chai";
import {
	Generator,
	BlockUpdater,
	BlockGenerator,
	DataStorage,
} from "./generator";
import { Graph, Node } from "../reader/graph";
import { Reader } from "../reader/reader";
import { Block, IBlock } from "../generator/block";
import { stub } from "sinon";
describe("Generator: ", () => {
	it("should return the simple object", () => {
		const pattern = "{name:string,age:number}";
		const reader = new Reader(pattern);
		const gen = new Generator(reader.scan());
		const res = gen.generate();
		assert.isString(res.name);
		assert.isNumber(res.age);
	});
	it("should return nested object", () => {
		const pattern =
			"{name:string,age:{year:number},id:{main:number,second:number}}";
		const reader = new Reader(pattern);
		const gen = new Generator(reader.scan());
		const res = gen.generate();
		assert.isString(res.name);
		assert.isObject(res.age);
		assert.isNumber(res.age.year);
		assert.isObject(res.id);
		assert.isNumber(res.id.main);
		assert.isNumber(res.id.second);
	});
	it("should return nested array", () => {
		const pattern = "{user:name,posts:{id:number,title:string,$times:3}}";
		const reader = new Reader(pattern);
		const gen = new Generator(reader.scan());
		const res = gen.generate();
		assert.isString(res.user);
		assert.isArray(res.posts);
		assert.equal(res.posts.length, 3);
	});
	it("should return array", () => {
		const pattern = "{id:number,name:firstname,$times:3}";
		const reader = new Reader(pattern);
		const gen = new Generator(reader.scan());
		const res = gen.generate();
		assert.isArray(res);
		assert.equal(res.length, 3);
		assert.isNumber(res[0].id);
		assert.isString(res[0].name);
	});
	it("should super deep nested object", () => {
		const pattern = "{a1:{a2:{a3:{a4:{a5:{a6:number}}}}}}";
		const reader = new Reader(pattern);
		const gen = new Generator(reader.scan());
		const res = gen.generate();
		assert.isObject(res);
		assert.isObject(res.a1);
		assert.isObject(res.a1.a2);
		assert.isObject(res.a1.a2.a3);
		assert.isObject(res.a1.a2.a3.a4);
		assert.isObject(res.a1.a2.a3.a4.a5);
		assert.isNumber(res.a1.a2.a3.a4.a5.a6);
	});
	it("nice example 1", () => {
		const pattern = "{name:string,age:{year:number,city:{place:string}}}";
		const reader = new Reader(pattern);
		const gen = new Generator(reader.scan());
		const res = gen.generate();
		assert.isString(res.name);
		assert.isNumber(res.age.year);
		assert.isObject(res.age.city);
		assert.isString(res.age.city.place);
	});
});
const graph = new Graph();
class FakeBlock extends Block {
	constructor(pattern: string) {
		super(pattern);
	}
	generate() {
		return { name: "string", age: "string" };
	}
}
graph.addVertex(
	"a",
	new FakeBlock("{name:string,age:{year:number,city:{place:string}}}")
);
graph.addVertex("b", new FakeBlock("{year:number,city:{place:string}}"));
graph.addVertex("c", new FakeBlock("{place:string}"));
graph.addEdge("a", "b");
graph.addEdge("b", "c");
describe("BlockUpdater: ", () => {
	it("should update parent pattern", () => {
		const blockParent = new FakeBlock(
			"{year:number,city:{place:string},city:{other:string}}"
		);
		const blockChild = new FakeBlock("{place:string}");
		const parentNode = new Node("a", blockParent);
		const childNode = new Node("b", blockChild);
		BlockUpdater.execute(parentNode, childNode);
		expect(blockParent.pattern).equals(
			"{year:number,city:___VAR___b,city:{other:string}}"
		);
	});
});
describe("BlockGenerator: ", () => {
	it("should return the json ", () => {
		stub(FakeBlock.prototype, "generate").callsFake((): any => {
			return { place: "string" };
		});
		const block = new FakeBlock("{place:string}");
		const node = new Node("a", block);
		const data = BlockGenerator.execute(node);
		expect(data).to.deep.eq({ place: "string" });
	});
});
describe("DataStorage: ", () => {
	it("should add values", () => {
		const storge = DataStorage.getInstance();
		storge.add("xxx", { age: "23" });
		expect(storge.get("xxx")).to.deep.eq({ age: "23" });
		const storgeA = DataStorage.getInstance();
		expect(storgeA.get("xxx")).to.deep.eq({ age: "23" });
	});
});
