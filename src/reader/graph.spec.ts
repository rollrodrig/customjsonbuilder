import { expect, assert } from "chai";
import { v4 as uuidv4 } from "uuid";
import { randomString } from "../utils/random-string";
import { Graph, Node, IGraphable } from "./graph";
class FakeGraphable implements IGraphable {}
describe("Graph: ", () => {
	it("should add vertex", () => {
		const r = new Graph();
		// console.log(randomString());
		const data = new FakeGraphable();
		r.addVertex("a", data);
		r.addVertex("b", data);
		r.addVertex("c", data);
		expect(r.nodes["a"]).instanceOf(Node);
		const node: Node = r.nodes["a"];
		assert.isFalse(node.visited);
	});
});
