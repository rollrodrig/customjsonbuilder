"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FirstChar_1 = require("../singleTask/FirstChar");
const LastChar_1 = require("../singleTask/LastChar");
exports.isArray = (q) => {
    return /^\[\]$/.test(FirstChar_1.firstChar(q) + LastChar_1.lastChar(q));
};
