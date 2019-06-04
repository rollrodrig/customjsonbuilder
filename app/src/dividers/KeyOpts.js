"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const OptsGenerator_1 = require("../constructors/OptsGenerator");
exports.keyOpts = (string) => {
    let splited = string.split(":");
    let k = splited[0];
    let opts = OptsGenerator_1.OptsGenerator(splited[1]);
    return {
        key: k,
        opts: opts
    };
};
