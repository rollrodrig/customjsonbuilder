"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Block = void 0;
var format_string_1 = require("./format-string");
var Block = (function () {
    function Block(pattern) {
        this.content = {};
        this.pattern = pattern;
        this._lockedPattern = this.pattern;
    }
    Object.defineProperty(Block.prototype, "lockedPattern", {
        get: function () {
            return this._lockedPattern;
        },
        enumerable: false,
        configurable: true
    });
    Block.prototype.replaceSubPatterns = function (subpattern, vertex) {
        this.pattern = this.pattern.replace(subpattern, vertex);
        return this.pattern;
    };
    Block.prototype.clone = function () {
        var block = new Block(this.pattern);
        return block;
    };
    Block.prototype.generate = function () {
        this.fomater = new format_string_1.FormatString(this.pattern);
        this.content = this.fomater.generate();
        return this.content;
    };
    return Block;
}());
exports.Block = Block;
