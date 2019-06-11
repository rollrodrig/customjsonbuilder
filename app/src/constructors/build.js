"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RemoveCurlyBraces_1 = require("../singleTask/RemoveCurlyBraces");
const isObject_1 = require("../validator/isObject");
const isArray_1 = require("../validator/isArray");
const RemoveSquareBrackets_1 = require("../singleTask/RemoveSquareBrackets");
const ComaDivider_1 = require("../dividers/ComaDivider");
const KeyValueDivider_1 = require("../dividers/KeyValueDivider");
const ArrayTimes_1 = require("../singleTask/ArrayTimes");
const objectExtractor_1 = require("./objectExtractor");
exports.build = (s) => {
    let string = s;
    if (isObject_1.isObject(string)) {
        string = RemoveCurlyBraces_1.removeCurlyBraces(string);
    }
    if (isArray_1.isArray(string)) {
        string = RemoveSquareBrackets_1.removeSquareBrackets(string);
    }
    let kvArray = ComaDivider_1.comaDivider(string);
    let response = kvArray.map((kv) => {
        let k = KeyValueDivider_1.keyValueDivider(kv);
        let key = k.key;
        let value = 'string';
        let nested = false;
        let times = -1;
        if (isObject_1.isObject(k.value)) {
            value = 'object';
            nested = exports.build(k.value);
        }
        else if (isArray_1.isArray(k.value)) {
            value = 'array';
            nested = exports.build(objectExtractor_1.objectExtractor(k.value));
            times = ArrayTimes_1.arrayTimes(k.value);
        }
        else {
            value = k.value;
            nested = false;
        }
        let obj = {
            key: key,
            value: value,
            nested: nested,
            times: times
        };
        return obj;
    });
    return response;
};
