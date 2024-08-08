"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpliterStrategy = void 0;
class SpliterStrategy {
    constructor() {
        this.stack = [];
        this.pattern = '';
    }
    isStackEmpty() {
        return this.stack.length <= 0;
    }
    addVertex(left) {
        this.stack.push(left);
        this.client.addVertex(left);
    }
    addConnection(right) {
        this.stack.pop();
        this.client.addConnection(right);
    }
    run() {
        const l = this.pattern.length;
        for (let x = 0; x < l; x++) {
            const char = this.pattern.charAt(x);
            if (char === '{') {
                this.addVertex(x);
            }
            if (char === '}') {
                this.addConnection(x);
            }
        }
        if (this.isStackEmpty()) {
            this.client.done();
        }
    }
}
exports.SpliterStrategy = SpliterStrategy;
