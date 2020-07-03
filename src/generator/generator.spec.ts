import { expect, assert } from "chai";
import { Generator } from "./generator";
import { Graph, Node, IGraphable } from "../reader/graph";
import { IBlock } from "../generator/block";
const graph = new Graph();
class FakeBlock implements IBlock {
	_pattern: string;
	parent: string;
	content: any;
	range: number[] = [];
	constructor(pattern: string, range: number[]) {
		this._pattern = pattern;
		this.range = range;
	}
	generate() {}
}
const pattern = "{a:s,b:{c:{c1:s}},d:{d1:s}}";
graph.addVertex("a", new FakeBlock(pattern, [0, 70]));
graph.addVertex("b", new FakeBlock(pattern, [10, 60]));
graph.addVertex("c", new FakeBlock(pattern, [20, 30]));
graph.addVertex("d", new FakeBlock(pattern, [40, 50]));
graph.addEdge("a", "b");
graph.addEdge("b", "c");
graph.addEdge("a", "d");

describe("Generator: ", () => {
	it(".run: should return the json ", () => {
		const gen = new Generator(graph);
		gen.generate();
		// expect(response).to.deep.eq(expected)
	});
});
