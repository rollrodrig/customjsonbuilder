"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const IsEmpty_1 = require("../validator/IsEmpty");
exports.firstChar = (string) => {
    if (IsEmpty_1.isEmpty(string)) {
        throw Error('string is empty');
    }
    return string.charAt(0);
};
