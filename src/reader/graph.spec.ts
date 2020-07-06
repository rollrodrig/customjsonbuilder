import { expect, assert } from "chai";
import { v4 as uuidv4 } from "uuid";
import { randomString } from "../utils/random-string";
import { Graph, Node, IGraphable, IGraphHandable } from "./graph";
import { Block } from "../generator/block";
class FakeGraphable implements IGraphable {}
class FakeGraphHandler implements IGraphHandable {
	generatedPath: string[] = [];
	handleNode(node: Node): void {
		this.generatedPath.push(node.vertex);
	}
}
describe("Graph: ", () => {
	it("should add vertex", () => {
		const r = new Graph();
		const data = new FakeGraphable();
		r.addVertex("a", data);
		r.addVertex("b", data);
		r.addVertex("c", data);
		expect(r.nodes["a"]).instanceOf(Node);
		const node: Node = r.nodes["a"];
		assert.isFalse(node.visited);
	});
	it("should add connections", () => {
		const r = new Graph();
		const data = new FakeGraphable();
		r.addVertex("a", data);
		r.addVertex("b", data);
		r.addVertex("c", data);
		r.addEdge("a", "b");
		r.addEdge("a", "c");
		r.addEdge("b", "c");
		const expected: any = {
			a: ["b", "c"],
			b: ["c"],
			c: [],
		};
		expect(r.connections).to.deep.eq(expected);
	});
	it("traverse simple graph", () => {
		const graph = new Graph();
		const data = new FakeGraphable();
		const handler = new FakeGraphHandler();
		graph.handler = handler;
		graph.addVertex("a", data);
		graph.addVertex("b", data);
		graph.addVertex("c", data);
		graph.addVertex("d", data);
		graph.addEdge("a", "b");
		graph.addEdge("b", "c");
		graph.addEdge("a", "d");
		graph.depthFirstTraverse();
		expect(handler.generatedPath).to.deep.eq(["c", "b", "d", "a"]);
	});
	it("traverse complex graph", () => {
		const graph = new Graph();
		const data = new FakeGraphable();
		const handler = new FakeGraphHandler();
		graph.handler = handler;
		graph.addVertex("a", data);
		graph.addVertex("b", data);
		graph.addVertex("c", data);
		graph.addVertex("d", data);
		graph.addVertex("e", data);
		graph.addVertex("f", data);
		graph.addVertex("g", data);
		graph.addVertex("h", data);
		graph.addVertex("i", data);
		graph.addVertex("j", data);
		graph.addVertex("k", data);
		graph.addVertex("l", data);
		graph.addVertex("m", data);
		graph.addVertex("n", data);
		graph.addVertex("o", data);
		graph.addEdge("a", "b");
		graph.addEdge("a", "c");
		graph.addEdge("a", "d");
		graph.addEdge("b", "e");
		graph.addEdge("b", "f");
		graph.addEdge("c", "g");
		graph.addEdge("d", "h");
		graph.addEdge("d", "i");
		graph.addEdge("d", "j");
		graph.addEdge("f", "k");
		graph.addEdge("f", "l");
		graph.addEdge("g", "m");
		graph.addEdge("g", "n");
		graph.addEdge("i", "o");
		graph.depthFirstTraverse();
		const expectedGeneratedPath = [
			"e",
			"k",
			"l",
			"f",
			"b",
			"m",
			"n",
			"g",
			"c",
			"h",
			"o",
			"i",
			"j",
			"d",
			"a",
		];
		expect(handler.generatedPath).to.deep.eq(expectedGeneratedPath);
	});
});
