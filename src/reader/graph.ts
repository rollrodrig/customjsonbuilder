export interface IGraphable {}
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
	private _nodes: { [key: string]: Node } = {};
	public get nodes(): { [key: string]: Node } {
		return this._nodes;
	}
	private _connections: { [key: string]: string[] } = {};
	public get connections(): { [key: string]: string[] } {
		return this._connections;
	}
	private queue: string[] = [];
	addVertex(vertex: string, data: IGraphable): void {
		this.nodes[vertex] = new Node(vertex, data);
		this.connections[vertex] = [];
	}
	addEdge(start: string, end: string): void {
		this.connections[start].push(end);
	}
	getNode(vertex: string): Node {
		return this.nodes[vertex];
	}
	lastItemInStack(): string {
		return this.stack[this.stack.length - 1];
	}
	hasItemInTheStack(): boolean {
		return this.stack.length > 0;
	}
	popStack(): string {
		return this.stack.pop();
	}
	depthFirstTraverse(initialVertex: string): void {
		console.log("Depth First Traverse");
		console.log("Start at " + initialVertex);
		this.stack.push(initialVertex);
		const currentNode: Node = this.getNode(initialVertex);
		currentNode.visited = true;
		let listConnectedVertexs = this.connections[this.lastItemInStack()];
		// let n = 0;
		while (this.hasItemInTheStack()) {
			for (let x = 0; x < listConnectedVertexs.length; x++) {
				const currentVertex = listConnectedVertexs[x];
				const node: Node = this.getNode(currentVertex);
				if (node.wasVisited()) {
					// go next connected vertex
				} else {
					// follow this vertex
					console.log("Visited vertex: " + currentVertex);
					node.visited = true;
					this.stack.push(currentVertex);
					listConnectedVertexs = this.connections[
						this.lastItemInStack()
					];
					// pop from the stack when there is no connected node
					while (listConnectedVertexs.length <= 0) {
						this.stack.pop();
						listConnectedVertexs = this.connections[
							this.lastItemInStack()
						];
					}
					break;
				}
				// if all noded were visited, pop last vertex from the stack
				if (x === listConnectedVertexs.length - 1) {
					this.stack.pop();
					if (this.stack.length > 0) {
						listConnectedVertexs = this.connections[
							this.lastItemInStack()
						];
					}
				}
			}
			// if(n>100)break;n++;
		}
		// this.list[initialVertex]
		console.log("End of the path");
	}
}
