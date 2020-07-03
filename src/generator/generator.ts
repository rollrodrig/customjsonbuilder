import { Graph, Node, IGraphable, IGraphHandable } from "../reader/graph";
import { Block, IBlock } from "./block";
import { bracesCounter } from "../utils/helpers";
export class DataStorage {
	private _data: { [key: string]: any } = {};
	public get data(): { [key: string]: any } {
		return this._data;
	}
	add(key: string, value: any) {
		this._data[key] = value;
	}
}
export class Generator implements IGraphHandable {
	private graph: Graph;
	private parent: string;
	private storage: DataStorage;
	constructor(graph: Graph) {
		this.graph = graph;
		this.graph.handler = this;
		this.storage = new DataStorage();
	}
	handleNode(node: Node) {
		// const block: Block = node.data as Block;
		// const parentVertex = this.graph.parentVertex();
		// console.log("current ", node.vertex, "parent ", parentVertex);
	}
	visitedNode(node: Node): void {
		console.log(
			"visited node ",
			node.vertex,
			"parent ",
			this.graph.parentVertex()
		);
		this.storage.add(node.vertex, {});
	}
	depthesNode(node: Node): void {
		const block: Block = node.data as Block;
		const parentVertex = this.graph.parentVertex();
		console.log("Depthes node ", node.vertex, "parent ", parentVertex);
		const content = block.generate();
		this.storage.add(node.vertex, content);
	}
	generate() {
		this.graph.depthFirstTraverse();
		console.log(this.storage.data);
		return {};
	}
}
