"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FirstChar_1 = require("./FirstChar");
const LastChar_1 = require("./LastChar");
exports.removeCurlyBraces = (s) => {
    let string = s;
    if (FirstChar_1.firstChar(string) === "{") {
        string = string.substring(1);
    }
    if (LastChar_1.lastChar(string) === "}") {
        string = string.substring(0, string.length - 1);
    }
    return string;
};
