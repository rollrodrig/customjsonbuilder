import { Graph, Node, IGraphable } from "../reader/graph";
import { Block, IBlock } from "./block";
export class Generator {
	graph: Graph;
	storage: any = {};
	parent: string;
	constructor(graph: Graph) {
		this.graph = graph;
	}
	generate(node: Node) {
		const block: Block = node.data as Block;
	}
	run(): any {
		// return this.graph.depthFirstTraverse("");
	}
}
