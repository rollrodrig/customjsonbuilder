"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomString = void 0;
exports.randomString = function () {
    var s = "v" +
        Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15);
    return s;
};
