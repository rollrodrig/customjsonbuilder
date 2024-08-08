"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Graph = exports.Node = void 0;
class Node {
    constructor(vertex, data) {
        this.visited = false;
        this.vertex = vertex;
        this.data = data;
    }
    wasVisited() {
        return this.visited;
    }
}
exports.Node = Node;
class Graph {
    constructor() {
        this.stack = [];
        this._root = '';
        this._nodes = {};
        this._connections = {};
    }
    get root() {
        return this._root;
    }
    get nodes() {
        return this._nodes;
    }
    get connections() {
        return this._connections;
    }
    set handler(handler) {
        this._handler = handler;
    }
    addRoot(vertex) {
        if (this._root === '') {
            this._root = vertex;
        }
    }
    addVertex(vertex, data) {
        this._nodes[vertex] = new Node(vertex, data);
        this._connections[vertex] = [];
        this.addRoot(vertex);
    }
    addEdge(start, end) {
        this._connections[start].push(end);
    }
    updateNodeData(vertex, updatedNode) {
        const node = this.getNode(vertex);
        node.data = updatedNode;
    }
    getNode(vertex) {
        return this.nodes[vertex];
    }
    lastItemInStack() {
        return this.stack[this.stack.length - 1];
    }
    parentVertex() {
        return this.stack[this.stack.length - 1] || null;
    }
    handleNode(node) {
        if (this._handler) {
            this._handler.handleNode(node);
        }
    }
    depthFirstTraverse() {
        let currentVertex = this._root;
        this.stack.push(currentVertex);
        let currentNode = this.getNode(currentVertex);
        let listConnectedVertex;
        currentNode.visited = true;
        let vertexToProcess;
        // let n = 0;
        while (this.stack.length > 0) {
            currentVertex = this.lastItemInStack();
            listConnectedVertex = this.connections[currentVertex];
            // no child nodes
            if (listConnectedVertex.length <= 0) {
                vertexToProcess = this.stack.pop();
                this.handleNode(this.getNode(vertexToProcess));
            }
            else {
                for (let x = 0; x < listConnectedVertex.length; x++) {
                    currentVertex = listConnectedVertex[x];
                    currentNode = this.getNode(currentVertex);
                    if (currentNode.visited === true) {
                        // if all noded were visited, pop last vertex from the stack
                        if (x === listConnectedVertex.length - 1) {
                            vertexToProcess = this.stack.pop();
                            this.handleNode(this.getNode(vertexToProcess));
                        }
                    }
                    else {
                        // follow this vertex
                        this.stack.push(currentVertex);
                        currentNode.visited = true;
                        break;
                    }
                }
            }
            // if(n>100)break;n++;
        }
    }
}
exports.Graph = Graph;
