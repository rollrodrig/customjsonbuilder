"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataStorage = exports.BlockGenerator = exports.BlockUpdater = exports.Generator = void 0;
var format_string_1 = require("./format-string");
var Generator = (function () {
    function Generator(graph) {
        this.graph = graph;
        this.graph.handler = this;
        this.storage = DataStorage.getInstance();
    }
    Generator.prototype.updateBlocks = function (node) {
        var parentVertex = this.graph.parentVertex();
        if (parentVertex) {
            var parentNode = this.graph.getNode(parentVertex);
            BlockUpdater.execute(parentNode, node);
        }
    };
    Generator.prototype.generateContent = function (node) {
        var content = BlockGenerator.execute(node);
        this.storage.add(node.vertex, content);
    };
    Generator.prototype.handleNode = function (node) {
        this.updateBlocks(node);
        this.generateContent(node);
    };
    Generator.prototype.generate = function () {
        this.graph.depthFirstTraverse();
        return this.storage.get(this.graph.root);
    };
    return Generator;
}());
exports.Generator = Generator;
var BlockUpdater = (function () {
    function BlockUpdater() {
    }
    BlockUpdater.execute = function (parent, child) {
        var p = parent.data;
        var c = child.data;
        p.replaceSubPatterns(c.lockedPattern, "" + format_string_1.VAR_CHILD_IDENTIFIER + child.vertex);
    };
    return BlockUpdater;
}());
exports.BlockUpdater = BlockUpdater;
var BlockGenerator = (function () {
    function BlockGenerator() {
    }
    BlockGenerator.execute = function (node) {
        var block = node.data;
        return block.generate();
    };
    return BlockGenerator;
}());
exports.BlockGenerator = BlockGenerator;
var DataStorage = (function () {
    function DataStorage() {
        this._data = {};
        if (DataStorage.instance) {
            throw new Error("Error - use Singleton.getInstance()");
        }
    }
    Object.defineProperty(DataStorage.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    DataStorage.getInstance = function () {
        DataStorage.instance = DataStorage.instance || new DataStorage();
        return DataStorage.instance;
    };
    DataStorage.prototype.add = function (key, value) {
        this._data[key] = value;
    };
    DataStorage.prototype.get = function (key) {
        return this._data[key];
    };
    return DataStorage;
}());
exports.DataStorage = DataStorage;
