"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
* remove spaces from string and return that string
* @param {string} string
* @returns
*/
exports.spaceCleaner = (string) => {
    return string.replace(/\s/g, "");
};
