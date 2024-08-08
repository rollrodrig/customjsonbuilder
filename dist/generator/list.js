"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.List = void 0;
const element_1 = require("./element");
class List extends element_1.GenericElement {
    constructor(value) {
        super();
        this.payload = [];
        if (value) {
            this.elements.push(value);
        }
    }
    generate() {
        this.elements.map((c) => {
            const tmp = c.generate();
            this.payload.push(tmp);
        });
        return this.payload;
    }
}
exports.List = List;
