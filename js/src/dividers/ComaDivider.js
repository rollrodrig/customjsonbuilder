"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.comaDivider = (string) => {
    let pattern = /(?:(\[|\{).*?(\]|\})|[^,])+/g;
    let arr = string.match(pattern);
    return arr;
};
