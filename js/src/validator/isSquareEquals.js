"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSquareEquals = (string) => {
    let o = [], c = [];
    let l = string.match(/\[/g);
    let r = string.match(/\]/g);
    if (l)
        o = l;
    if (r)
        c = r;
    return o.length === c.length;
};
