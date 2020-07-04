export interface IGraphable {}
export interface IGraphHandable {
	visitedNode(node: Node): void;
	depthesNode(node: Node): void;
	handleNode(node: Node): void;
}
import { Block } from "../generator/block";
export class Node {
	private _visited = false;
	public get visited(): boolean {
		return this._visited;
	}
	public set visited(value: boolean) {
		this._visited = value;
	}
	data: IGraphable;
	vertex: string;
	constructor(vertex: string, data: IGraphable) {
		this.vertex = vertex;
		this.data = data;
	}
	wasVisited(): boolean {
		return this.visited;
	}
}
export class Graph {
	private stack: string[] = [];
	private _root: string = null;
	private _nodes: { [key: string]: Node } = {};
	public get nodes(): { [key: string]: Node } {
		return this._nodes;
	}
	private _connections: { [key: string]: string[] } = {};
	public get connections(): { [key: string]: string[] } {
		return this._connections;
	}
	private _handler: IGraphHandable;
	public set handler(handler: IGraphHandable) {
		this._handler = handler;
	}
	addRoot(vertex: string): void {
		if (this._root === null) this._root = vertex;
	}
	addVertex(vertex: string, data: IGraphable): void {
		this.nodes[vertex] = new Node(vertex, data);
		this.connections[vertex] = [];
		this.addRoot(vertex);
	}
	addEdge(start: string, end: string): void {
		this.connections[start].push(end);
	}
	updateNodeData(vertex: string, updatedBlock: IGraphable): void {
		const node: Node = this.getNode(vertex);
		node.data = updatedBlock;
	}
	getNode(vertex: string): Node {
		return this.nodes[vertex];
	}
	lastItemInStack(): string {
		return this.stack[this.stack.length - 1];
	}
	parentVertex(): string {
		return this.stack[this.stack.length - 2] || null;
	}
	private hasItemInTheStack(): boolean {
		return this.stack.length > 0;
	}
	private popStack(): string {
		return this.stack.pop();
	}
	private visitedNode(node: Node) {
		if (this._handler) {
			this._handler.visitedNode(node);
		}
	}
	private depthestNode(node: Node) {
		if (this._handler) {
			this._handler.depthesNode(node);
		}
	}
	private handleNode(node: Node) {
		if (this._handler) {
			this._handler.handleNode(node);
		}
	}
	depthFirstTraverse(): void {
		console.log("Start at " + this._root);
		let currentVertex: string = this._root;
		this.stack.push(currentVertex);
		let currentNode = this.getNode(currentVertex);
		let listConnectedVertex: string[];
		currentNode.visited = true;
		this.visitedNode(currentNode);
		// let n = 0;
		while (this.stack.length > 0) {
			currentVertex = this.lastItemInStack();
			listConnectedVertex = this.connections[currentVertex];
			// no child nodes
			if (listConnectedVertex.length <= 0) {
				this.depthestNode(this.getNode(currentVertex));
				this.stack.pop();
			} else {
				for (let x = 0; x < listConnectedVertex.length; x++) {
					currentVertex = listConnectedVertex[x];
					currentNode = this.getNode(currentVertex);
					if (currentNode.visited === true) {
						// if all noded were visited, pop last vertex from the stack
						if (x === listConnectedVertex.length - 1) {
							// this.depthestNode(this.getNode(currentVertex));
							this.stack.pop();
						}
					} else {
						// follow this vertex
						this.stack.push(currentVertex);
						currentNode.visited = true;
						this.visitedNode(currentNode);
						break;
					}
				}
			}
			// if(n>100)break;n++;
		}
	}
}
