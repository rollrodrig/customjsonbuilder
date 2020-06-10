"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.comaDivider = (string) => {
    let braces = 0;
    const indexes = [];
    const divided = [];
    const l = string.length;
    for (let i = 0; i < l; i++) {
        const c = string.charAt(i);
        if (c === "{") {
            braces++;
        }
        if (c === "}") {
            braces--;
        }
        if (c === "," && braces === 0) {
            indexes.push(i);
        }
    }
    indexes.push(string.length);
    indexes.reduce((prev, next) => {
        divided.push(string.substring(prev, next));
        return next + 1;
    }, 0);
    return divided;
};
// let pattern = /(?:(\[|\{).*?(\]|\})|[^,])+/g;
// let pattern = /(?:(\{).*?(\})|[^,])+/g;
// let arr = string.match(pattern);
// return arr;
