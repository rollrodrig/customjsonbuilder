"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.objectExtractor = (string) => {
    let obj = string.match(/{.*}/);
    return obj[0];
};
