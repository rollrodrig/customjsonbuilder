"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reader = exports.StackInfo = void 0;
var spliter_1 = require("./spliter");
var graph_1 = require("./graph");
var random_string_1 = require("../utils/random-string");
var block_1 = require("../generator/block");
var StackInfo = (function () {
    function StackInfo(id, left) {
        this.id = id;
        this.left = left;
        this.right = null;
    }
    return StackInfo;
}());
exports.StackInfo = StackInfo;
var Reader = (function () {
    function Reader(pattern) {
        this.stack = [];
        this.splitsDone = false;
        this._pattern = pattern;
        this.graph = new graph_1.Graph();
        this.spliter = new spliter_1.SpliterStrategy();
        this.spliter.client = this;
        this.spliter.pattern = pattern;
    }
    Object.defineProperty(Reader.prototype, "pattern", {
        set: function (value) {
            this._pattern = value;
        },
        enumerable: false,
        configurable: true
    });
    Reader.prototype.unitqueId = function () {
        return random_string_1.randomString();
    };
    Reader.prototype.lastItemFromStack = function () {
        return this.stack[this.stack.length - 1];
    };
    Reader.prototype.createOneStack = function (left) {
        var stackInfo = new StackInfo(this.unitqueId(), left);
        this.stack.push(stackInfo);
        return stackInfo;
    };
    Reader.prototype.createBlock = function (stackInfo) {
        var subPattern = this._pattern.substring(stackInfo.left, stackInfo.right + 1);
        return new block_1.Block(subPattern);
    };
    Reader.prototype.popFromStack = function () {
        return this.stack.pop();
    };
    Reader.prototype.done = function () {
        this.splitsDone = true;
    };
    Reader.prototype.addVertex = function (left) {
        var stackInfo = this.createOneStack(left);
        var block = this.createBlock(stackInfo);
        this.graph.addVertex(stackInfo.id, block);
    };
    Reader.prototype.addConnection = function (right) {
        var childStackInfo = this.popFromStack();
        childStackInfo.right = right;
        var block = this.createBlock(childStackInfo);
        this.graph.updateNodeData(childStackInfo.id, block);
        var parentStackInfo = this.lastItemFromStack();
        if (parentStackInfo) {
            this.graph.addEdge(parentStackInfo.id, childStackInfo.id);
        }
    };
    Reader.prototype.scan = function () {
        this.spliter.run();
        return this.graph;
    };
    return Reader;
}());
exports.Reader = Reader;
