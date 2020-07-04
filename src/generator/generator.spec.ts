import { expect, assert } from "chai";
import { Generator } from "./generator";
import { Graph, Node, IGraphable } from "../reader/graph";
import { Reader } from "../reader/reader";
import { Block, IBlock } from "../generator/block";
const graph = new Graph();
class FakeBlock extends Block {
	constructor(pattern: string) {
		super(pattern);
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
	it(".run: should return the json ", () => {
		const gen = new Generator(graph);
		gen.generate();
		// expect(response).to.deep.eq(expected)
	});
});
