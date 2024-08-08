"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataStorage = exports.BlockGenerator = exports.BlockUpdater = exports.Generator = void 0;
const format_string_1 = require("./format-string");
class Generator {
    constructor(graph) {
        this.graph = graph;
        this.graph.handler = this;
        this.storage = DataStorage.getInstance();
    }
    updateBlocks(node) {
        const parentVertex = this.graph.parentVertex();
        if (parentVertex) {
            const parentNode = this.graph.getNode(parentVertex);
            BlockUpdater.execute(parentNode, node);
        }
    }
    generateContent(node) {
        const content = BlockGenerator.execute(node);
        this.storage.add(node.vertex, content);
    }
    handleNode(node) {
        this.updateBlocks(node);
        this.generateContent(node);
    }
    generate() {
        this.graph.depthFirstTraverse();
        return this.storage.get(this.graph.root);
    }
}
exports.Generator = Generator;
class BlockUpdater {
    static execute(parent, child) {
        const p = parent.data;
        const c = child.data;
        p.replaceSubPatterns(c.lockedPattern, `${format_string_1.VAR_CHILD_IDENTIFIER}${child.vertex}`);
    }
}
exports.BlockUpdater = BlockUpdater;
class BlockGenerator {
    static execute(node) {
        const block = node.data;
        return block.generate();
    }
}
exports.BlockGenerator = BlockGenerator;
class DataStorage {
    get data() {
        return this._data;
    }
    constructor() {
        this._data = {};
        if (DataStorage.instance) {
            throw new Error('Error - use Singleton.getInstance()');
        }
    }
    static getInstance() {
        DataStorage.instance = DataStorage.instance || new DataStorage();
        return DataStorage.instance;
    }
    add(key, value) {
        this._data[key] = value;
    }
    get(key) {
        return this._data[key];
    }
}
exports.DataStorage = DataStorage;
