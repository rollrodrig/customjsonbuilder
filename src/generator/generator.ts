import { Graph, Node, IGraphable, IGraphHandable } from "../reader/graph";
import { Block, IBlock } from "./block";
import { bracesCounter } from "../utils/helpers";
import { timeStamp } from "console";
export class DataStorage {
	private _data: { [key: string]: any } = {};
	public get data(): { [key: string]: any } {
		return this._data;
	}
	private static instance: DataStorage;
	constructor() {
		if (DataStorage.instance) {
			throw new Error("Error - use Singleton.getInstance()");
		}
	}
	static getInstance(): DataStorage {
		DataStorage.instance = DataStorage.instance || new DataStorage();
		return DataStorage.instance;
	}
	add(key: string, value: any): void {
		this._data[key] = value;
	}
	get(key: string): any {
		return this._data[key];
	}
}
export class Generator implements IGraphHandable {
	private graph: Graph;
	private parent: string;
	private storage: DataStorage;
	constructor(graph: Graph) {
		this.graph = graph;
		this.graph.handler = this;
		this.storage = DataStorage.getInstance();
	}
	private updateBlocks(node: Node): void {
		const parentVertex = this.graph.parentVertex();
		if (parentVertex) {
			const parentNode = this.graph.getNode(parentVertex);
			BlockUpdater.execute(parentNode, node);
		}
		console.log("parent ", parentVertex);
	}
	private generateContent(node: Node): void {
		const content = BlockGenerator.execute(node);
		this.storage.add(node.vertex, content);
		console.log("generated ", node.vertex);
		console.log("content ", content);
	}
	handleNode(node: Node) {
		this.updateBlocks(node);
		this.generateContent(node);
	}
	generate() {
		this.graph.depthFirstTraverse();
		console.log(this.storage.data);
		return {};
	}
}
export class BlockUpdater {
	static execute(parent: Node, child: Node): void {
		const p = parent.data as Block;
		const c = child.data as Block;
		p.replaceSubPatterns(c.lockedPattern, `___VAR___${child.vertex}`);
	}
}
export class BlockGenerator {
	static execute(node: Node): any {
		const block = node.data as Block;
		return block.generate();
	}
}
