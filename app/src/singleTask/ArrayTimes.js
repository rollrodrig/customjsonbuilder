"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RemoveSquareBrackets_1 = require("./RemoveSquareBrackets");
/**
 * return the array length
 * @param {*} s
 * @returns {number}
 */
exports.nanError = "array length is NaN";
exports.wrongFormat = "wrong array format";
exports.arrayTimes = (s) => {
    let string = RemoveSquareBrackets_1.removeSquareBrackets(s);
    let splited = string.split(";");
    if (splited.length !== 2) {
        throw SyntaxError(`${exports.wrongFormat} ${s}`);
    }
    let times = parseInt(splited[1]);
    if (isNaN(times)) {
        throw TypeError(`${exports.nanError} ${s}`);
    }
    return (times < 0) ? times * -1 : times;
};
