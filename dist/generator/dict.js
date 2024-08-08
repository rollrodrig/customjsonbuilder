"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dict = void 0;
const element_1 = require("./element");
class Dict extends element_1.GenericElement {
    constructor(key, value) {
        super();
        this.payload = {};
        if (key && value) {
            this.payload = {
                [key]: value.generate(),
            };
        }
    }
    generate() {
        this.elements.map((c) => {
            const tmp = c.generate();
            this.payload = Object.assign(Object.assign({}, this.payload), tmp);
        });
        return this.payload;
    }
}
exports.Dict = Dict;
