import { expect, assert } from "chai";
import { Generator, BlockUpdater, BlockGenerator } from "./generator";
import { Graph, Node, IGraphable } from "../reader/graph";
import { Reader } from "../reader/reader";
import { Block, IBlock } from "../generator/block";
import { stub } from "sinon";
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

describe("Generator: ", () => {
	it("should return the json ", () => {
		const gen = new Generator(graph);
		gen.generate();
		// expect(response).to.deep.eq(expected)
	});
});
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
