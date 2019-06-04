"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const IsArray_1 = require("./IsArray");
const IsObject_1 = require("./IsObject");
exports.isValue = (s) => {
    return !(IsArray_1.isArray(s) || IsObject_1.isObject(s));
};
