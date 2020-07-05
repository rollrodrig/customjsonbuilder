import { expect, assert } from "chai";
import {
	Generator,
	BlockUpdater,
	BlockGenerator,
	DataStorage,
} from "./generator";
import { Graph, Node, IGraphable } from "../reader/graph";
import { Reader } from "../reader/reader";
import { Block, IBlock } from "../generator/block";
import { stub } from "sinon";
describe("Generator: ", () => {
	it("should return the json ", () => {
		// const pattern =
		// 	"{name:string,age:{year:number},id:{main:number,second:number}}";
		// const pattern = "{place:string}";
		// const pattern = "{name:name,age:number,id:uuid}";
		// const pattern = "{name:string,age:{year:number},id:string}";
		const pattern = `
			{
				name:string,
				age:{
					year:number
				},
				id:string
			}
		`;
		const reader = new Reader(pattern);
		const gen = new Generator(reader.scan());
		const res = gen.generate();
		console.log(res);
		// expect(response).to.deep.eq(expected)
	});
});
// const graph = new Graph();
// class FakeBlock extends Block {
// 	constructor(pattern: string) {
// 		super(pattern);
// 	}
// 	generate() {
// 		return { name: "string", age: "string" };
// 	}
// }
// graph.addVertex(
// 	"a",
// 	new FakeBlock("{name:string,age:{year:number,city:{place:string}}}")
// );
// graph.addVertex("b", new FakeBlock("{year:number,city:{place:string}}"));
// graph.addVertex("c", new FakeBlock("{place:string}"));
// graph.addEdge("a", "b");
// graph.addEdge("b", "c");
// describe("BlockUpdater: ", () => {
// 	it("should update parent pattern", () => {
// 		const blockParent = new FakeBlock(
// 			"{year:number,city:{place:string},city:{other:string}}"
// 		);
// 		const blockChild = new FakeBlock("{place:string}");
// 		const parentNode = new Node("a", blockParent);
// 		const childNode = new Node("b", blockChild);
// 		BlockUpdater.execute(parentNode, childNode);
// 		expect(blockParent.pattern).equals(
// 			"{year:number,city:___VAR___b,city:{other:string}}"
// 		);
// 	});
// });
// describe("BlockGenerator: ", () => {
// 	it("should return the json ", () => {
// 		stub(FakeBlock.prototype, "generate").callsFake((): any => {
// 			return { place: "string" };
// 		});
// 		const block = new FakeBlock("{place:string}");
// 		const node = new Node("a", block);
// 		const data = BlockGenerator.execute(node);
// 		expect(data).to.deep.eq({ place: "string" });
// 	});
// });
// describe("DataStorage: ", () => {
// 	it("should add values", () => {
// 		const storge = DataStorage.getInstance();
// 		storge.add("xxx", { age: "23" });
// 		expect(storge.get("xxx")).to.deep.eq({ age: "23" });
// 		const storgeA = DataStorage.getInstance();
// 		expect(storgeA.get("xxx")).to.deep.eq({ age: "23" });
// 	});
// });
