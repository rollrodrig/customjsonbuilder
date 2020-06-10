"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *
 * split the string in : and return the object
 * @param {string} s
 * @returns {TKeyValueDivider}
 */
exports.keyValueDivider = (s) => {
    const splited = s.split(/:(.*)/);
    return {
        key: splited[0],
        value: splited[1]
    };
};
