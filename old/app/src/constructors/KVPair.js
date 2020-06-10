"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *
 * Generate the final couple of key value  pairs
 * should no be used if the 'value' is array or object
 * @param {string} string
 * @returns
 */
exports.kvPair = (string) => {
    let kv = string.split(':');
    return {
        key: kv[0],
        value: kv[1],
        nested: false,
    };
};
