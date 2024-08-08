"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenericElement = void 0;
class GenericElement {
    constructor() {
        this.key = '';
        this.elements = [];
    }
    add(c) {
        this.elements.push(c);
    }
}
exports.GenericElement = GenericElement;
