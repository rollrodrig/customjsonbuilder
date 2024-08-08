export interface IGraphable {}

export interface IGraphHandable {
  handleNode(node: Node): void
}

export class Node {
  public visited: boolean = false
  data: IGraphable
  vertex: string
  constructor(vertex: string, data: IGraphable) {
    this.vertex = vertex
    this.data = data
  }
  wasVisited(): boolean {
    return this.visited
  }
}

export class Graph {
  private stack: string[] = []
  private _root: string = ''
  public get root(): string {
    return this._root
  }
  private _nodes: { [key: string]: Node } = {}
  public get nodes(): { [key: string]: Node } {
    return this._nodes
  }
  private _connections: { [key: string]: string[] } = {}
  public get connections(): { [key: string]: string[] } {
    return this._connections
  }
  private _handler: IGraphHandable | any
  public set handler(handler: IGraphHandable) {
    this._handler = handler
  }
  private addRoot(vertex: string): void {
    if (this._root === '') {
      this._root = vertex
    }
  }
  addVertex(vertex: string, data: IGraphable): void {
    this._nodes[vertex] = new Node(vertex, data)
    this._connections[vertex] = []
    this.addRoot(vertex)
  }
  addEdge(start: string, end: string): void {
    this._connections[start].push(end)
  }
  updateNodeData(vertex: string, updatedNode: IGraphable): void {
    const node: Node = this.getNode(vertex)
    node.data = updatedNode
  }
  getNode(vertex: string): Node {
    return this.nodes[vertex]
  }
  lastItemInStack(): string {
    return this.stack[this.stack.length - 1]
  }
  parentVertex(): string | any {
    return this.stack[this.stack.length - 1] || null
  }
  private handleNode(node: Node) {
    if (this._handler) {
      this._handler.handleNode(node)
    }
  }
  depthFirstTraverse(): void {
    let currentVertex: string = this._root
    this.stack.push(currentVertex)
    let currentNode = this.getNode(currentVertex)
    let listConnectedVertex: string[]
    currentNode.visited = true
    let vertexToProcess: string | any

    // let n = 0;
    while (this.stack.length > 0) {
      currentVertex = this.lastItemInStack()
      listConnectedVertex = this.connections[currentVertex]

      // no child nodes
      if (listConnectedVertex.length <= 0) {
        vertexToProcess = this.stack.pop()
        this.handleNode(this.getNode(vertexToProcess))
      } else {
        for (let x = 0; x < listConnectedVertex.length; x++) {
          currentVertex = listConnectedVertex[x]
          currentNode = this.getNode(currentVertex)

          if (currentNode.visited === true) {
            // if all noded were visited, pop last vertex from the stack
            if (x === listConnectedVertex.length - 1) {
              vertexToProcess = this.stack.pop()
              this.handleNode(this.getNode(vertexToProcess))
            }
          } else {
            // follow this vertex
            this.stack.push(currentVertex)
            currentNode.visited = true
            break
          }
        }
      }
      // if(n>100)break;n++;
    }
  }
}
