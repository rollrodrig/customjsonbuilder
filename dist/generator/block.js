"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Block = void 0;
const format_string_1 = require("./format-string");
class Block {
    get lockedPattern() {
        return this._lockedPattern;
    }
    constructor(pattern) {
        this.content = {};
        this.pattern = pattern;
        this._lockedPattern = this.pattern;
        this.fomater = new format_string_1.FormatString(this.pattern);
    }
    replaceSubPatterns(subpattern, vertex) {
        this.pattern = this.pattern.replace(subpattern, vertex);
        return this.pattern;
    }
    clone() {
        const block = new Block(this.pattern);
        return block;
    }
    generate() {
        this.content = this.fomater.generate();
        return this.content;
    }
}
exports.Block = Block;
