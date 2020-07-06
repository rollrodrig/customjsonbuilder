"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpliterStrategy = void 0;
var SpliterStrategy = (function () {
    function SpliterStrategy() {
        this.stack = [];
    }
    Object.defineProperty(SpliterStrategy.prototype, "pattern", {
        set: function (value) {
            this._pattern = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpliterStrategy.prototype, "client", {
        set: function (value) {
            this._client = value;
        },
        enumerable: false,
        configurable: true
    });
    SpliterStrategy.prototype.isStackEmpty = function () {
        return this.stack.length <= 0;
    };
    SpliterStrategy.prototype.addVertex = function (left) {
        this.stack.push(left);
        this._client.addVertex(left);
    };
    SpliterStrategy.prototype.addConnection = function (right) {
        this.stack.pop();
        this._client.addConnection(right);
    };
    SpliterStrategy.prototype.run = function () {
        var l = this._pattern.length;
        for (var x = 0; x < l; x++) {
            var char = this._pattern.charAt(x);
            if (char === "{") {
                this.addVertex(x);
            }
            if (char === "}") {
                this.addConnection(x);
            }
        }
        if (this.isStackEmpty()) {
            this._client.done();
        }
    };
    return SpliterStrategy;
}());
exports.SpliterStrategy = SpliterStrategy;
