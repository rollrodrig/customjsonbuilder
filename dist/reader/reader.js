"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reader = exports.StackInfo = void 0;
const uuid_1 = require("uuid");
const spliter_1 = require("./spliter");
const graph_1 = require("./graph");
const block_1 = require("../generator/block");
class StackInfo {
    constructor(id, left) {
        this.id = id;
        this.left = left;
        this.right = 0;
    }
}
exports.StackInfo = StackInfo;
class Reader {
    constructor(pattern) {
        this.stack = [];
        this.splitsDone = false;
        this.pattern = pattern;
        this.graph = new graph_1.Graph();
        this.spliter = new spliter_1.SpliterStrategy();
        this.spliter.client = this;
        this.spliter.pattern = pattern;
    }
    unitqueId() {
        return (0, uuid_1.v4)();
    }
    lastItemFromStack() {
        return this.stack[this.stack.length - 1];
    }
    createOneStack(left) {
        const stackInfo = new StackInfo(this.unitqueId(), left);
        this.stack.push(stackInfo);
        return stackInfo;
    }
    createBlock(stackInfo) {
        const subPattern = this.pattern.substring(stackInfo.left, stackInfo.right + 1);
        return new block_1.Block(subPattern);
    }
    popFromStack() {
        return this.stack.pop();
    }
    done() {
        this.splitsDone = true;
    }
    addVertex(left) {
        const stackInfo = this.createOneStack(left);
        const block = this.createBlock(stackInfo);
        this.graph.addVertex(stackInfo.id, block);
    }
    addConnection(right) {
        const childStackInfo = this.popFromStack();
        childStackInfo.right = right;
        const block = this.createBlock(childStackInfo);
        this.graph.updateNodeData(childStackInfo.id, block);
        const parentStackInfo = this.lastItemFromStack();
        if (parentStackInfo) {
            this.graph.addEdge(parentStackInfo.id, childStackInfo.id);
        }
    }
    scan() {
        this.spliter.run();
        return this.graph;
    }
}
exports.Reader = Reader;
