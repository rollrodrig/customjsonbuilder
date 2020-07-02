import { expect, assert } from "chai";
import { Generator } from "./generator";
import { Graph, Node, IGraphable } from "../reader/graph";
import { IBlock } from "../reader/block";
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
const pattern = "{a:s,b:{c:s}}";
graph.addVertex("a", new FakeBlock(pattern, [0, 12]));
graph.addVertex("b", new FakeBlock(pattern, [7, 11]));
graph.addEdge("a", "b");
describe("Generator: ", () => {
	it(".run: should return the json ", () => {
		const gen = new Generator(graph);

		// expect(response).to.deep.eq(expected)
	});
});
