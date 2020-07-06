"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenericElement = void 0;
var GenericElement = (function () {
    function GenericElement() {
        this.elements = [];
    }
    GenericElement.prototype.add = function (c) {
        this.elements.push(c);
    };
    return GenericElement;
}());
exports.GenericElement = GenericElement;
