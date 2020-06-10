"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.objectExtractor = (string) => {
    const obj = string.match(/{.*}/);
    return obj[0];
};
