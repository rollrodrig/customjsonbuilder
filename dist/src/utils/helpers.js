"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bracesCounter = void 0;
exports.bracesCounter = function (pattern) {
    var l = pattern.length;
    var left = [];
    var right = [];
    for (var x = 0; x < l; x++) {
        var char = pattern.charAt(x);
        if (char === "{") {
            left.push(x);
        }
        if (char === "}") {
            right.push(x);
        }
    }
    console.log(left);
    console.log(right);
};
