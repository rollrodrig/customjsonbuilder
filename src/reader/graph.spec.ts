import { expect, assert } from "chai";
import { v4 as uuidv4 } from "uuid";
import { randomString } from "../utils/random-string";
import { Graph, Node, IGraphable } from "./graph";
class FakeGraphable implements IGraphable {}
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
		console.log(r.connections);
		const expected: any = {
			a: ["b", "c"],
			b: ["c"],
			c: [],
		};
		expect(r.connections).to.deep.eq(expected);
	});
	it("traverse graph", () => {
		const g = new Graph();
		const data = new FakeGraphable();
		g.addVertex("A", data);
		g.addVertex("B", data);
		g.addVertex("C", data);
		g.addVertex("D", data);
		g.addVertex("E", data);
		g.addVertex("F", data);
		g.addVertex("G", data);
		g.addVertex("H", data);
		g.addVertex("I", data);
		g.addEdge("A", "B");
		g.addEdge("A", "C");
		g.addEdge("A", "D");
		g.addEdge("B", "A");
		g.addEdge("B", "C");
		g.addEdge("B", "E");
		g.addEdge("C", "A");
		g.addEdge("C", "B");
		g.addEdge("C", "D");
		g.addEdge("C", "F");
		g.addEdge("C", "G");
		g.addEdge("D", "A");
		g.addEdge("D", "C");
		g.addEdge("D", "G");
		g.addEdge("E", "B");
		g.addEdge("F", "C");
		g.addEdge("F", "I");
		g.addEdge("G", "C");
		g.addEdge("G", "D");
		g.addEdge("G", "H");
		// g.depthFirstTraverse("C");
	});
});
