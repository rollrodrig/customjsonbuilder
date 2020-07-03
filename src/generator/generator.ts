import { Graph, Node, IGraphable, IGraphHandable } from "../reader/graph";
import { Block, IBlock } from "./block";
export class DataStorage {
	private data: { [key: string]: any } = {};
	add(key: string, value: any) {
		this.data[key] = value;
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
	handleGraphNode(node: Node) {
		const block: Block = node.data as Block;
		// console.log(node.vertex);
		const parentVertex = this.graph.parentVertex();
		console.log("current ", node.vertex, "parent ", parentVertex);
	}
	generate() {
		this.graph.depthFirstTraverse("");
		return {};
	}
}
