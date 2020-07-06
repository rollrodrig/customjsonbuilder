"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Graph = exports.Node = void 0;
var Node = (function () {
    function Node(vertex, data) {
        this._visited = false;
        this.vertex = vertex;
        this.data = data;
    }
    Object.defineProperty(Node.prototype, "visited", {
        get: function () {
            return this._visited;
        },
        set: function (value) {
            this._visited = value;
        },
        enumerable: false,
        configurable: true
    });
    Node.prototype.wasVisited = function () {
        return this.visited;
    };
    return Node;
}());
exports.Node = Node;
var Graph = (function () {
    function Graph() {
        this.stack = [];
        this._root = null;
        this._nodes = {};
        this._connections = {};
    }
    Object.defineProperty(Graph.prototype, "root", {
        get: function () {
            return this._root;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Graph.prototype, "nodes", {
        get: function () {
            return this._nodes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Graph.prototype, "connections", {
        get: function () {
            return this._connections;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Graph.prototype, "handler", {
        set: function (handler) {
            this._handler = handler;
        },
        enumerable: false,
        configurable: true
    });
    Graph.prototype.addRoot = function (vertex) {
        if (this._root === null)
            this._root = vertex;
    };
    Graph.prototype.addVertex = function (vertex, data) {
        this.nodes[vertex] = new Node(vertex, data);
        this.connections[vertex] = [];
        this.addRoot(vertex);
    };
    Graph.prototype.addEdge = function (start, end) {
        this.connections[start].push(end);
    };
    Graph.prototype.updateNodeData = function (vertex, updatedBlock) {
        var node = this.getNode(vertex);
        node.data = updatedBlock;
    };
    Graph.prototype.getNode = function (vertex) {
        return this.nodes[vertex];
    };
    Graph.prototype.lastItemInStack = function () {
        return this.stack[this.stack.length - 1];
    };
    Graph.prototype.parentVertex = function () {
        return this.stack[this.stack.length - 1] || null;
    };
    Graph.prototype.handleNode = function (node) {
        if (this._handler) {
            this._handler.handleNode(node);
        }
    };
    Graph.prototype.depthFirstTraverse = function () {
        var currentVertex = this._root;
        this.stack.push(currentVertex);
        var currentNode = this.getNode(currentVertex);
        var listConnectedVertex;
        currentNode.visited = true;
        var vertexToProcess;
        while (this.stack.length > 0) {
            currentVertex = this.lastItemInStack();
            listConnectedVertex = this.connections[currentVertex];
            if (listConnectedVertex.length <= 0) {
                vertexToProcess = this.stack.pop();
                this.handleNode(this.getNode(vertexToProcess));
            }
            else {
                for (var x = 0; x < listConnectedVertex.length; x++) {
                    currentVertex = listConnectedVertex[x];
                    currentNode = this.getNode(currentVertex);
                    if (currentNode.visited === true) {
                        if (x === listConnectedVertex.length - 1) {
                            vertexToProcess = this.stack.pop();
                            this.handleNode(this.getNode(vertexToProcess));
                        }
                    }
                    else {
                        this.stack.push(currentVertex);
                        currentNode.visited = true;
                        break;
                    }
                }
            }
        }
    };
    return Graph;
}());
exports.Graph = Graph;
