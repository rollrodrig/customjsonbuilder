export interface IGraphable {}
export class Node {
  visited = false;
  data: IGraphable;
  vertex: string;
  constructor(vertex: string, data: IGraphable) {
    this.vertex = vertex;
    this.data = data;
  }
  isVisited() {
    return this.visited;
  }
}
export class Graph {
  nodes: { [key: string]: Node } = {};
  connections: { [key: string]: string[] } = {};
  queue: string[] = [];
  addVertex(vertex: string, data: IGraphable) {
    this.nodes[vertex] = new Node(vertex, data);
    this.connections[vertex] = [];
  }
  addConnection(start: string, end: string) {
    this.connections[start].push(end);
  }
}
