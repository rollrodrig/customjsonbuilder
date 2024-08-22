"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomJsonBuilder = void 0;
const faker_1 = require("@faker-js/faker");
const TIMES = '_times';
const cleaner = (pattern) => {
    pattern = pattern.replace(/\t*\s*/g, '');
    pattern = pattern.replace(/,}/g, '}');
    return pattern;
};
const validator = (pattern) => {
    const numberOfLeftBraces = (pattern.match(/{/g) || []).length;
    const numberOfRightBraces = (pattern.match(/}/g) || []).length;
    return numberOfLeftBraces === numberOfRightBraces;
};
const parsePattern = (pattern) => {
    pattern = pattern.replace(/(\w+):(\w+)/g, '"$1":"$2"');
    pattern = pattern.replace(/(\w+):{/g, '"$1":{');
    const obj = JSON.parse(pattern);
    return obj;
};
const valueParser = (value) => {
    let newValue;
    switch (value) {
        case 'string':
            newValue = faker_1.faker.string.alpha(15);
            break;
        case 'number':
            newValue = faker_1.faker.number.int();
            break;
    }
    return newValue;
};
const generator = (obj) => {
    const timesKey = Object.keys(obj).find((key) => key === TIMES);
    if (timesKey) {
        const times = parseInt(obj._times);
        const tmpArrObjs = [];
        delete obj[TIMES];
        for (let i = 0; i < times; i++) {
            tmpArrObjs.push(generator(Object.assign({}, obj)));
        }
        return tmpArrObjs;
    }
    else {
        Object.entries(obj).forEach(([key, value]) => {
            if (typeof value === 'object') {
                obj[key] = generator(Object.assign({}, value));
            }
            else {
                obj[key] = valueParser(value);
            }
        });
        return obj;
    }
};
const CustomJsonBuilder = (pattern) => {
    const isValid = validator(pattern);
    if (!isValid) {
        throw new Error('Invalid pattern');
    }
    const cleanedPattern = cleaner(pattern);
    const obj = parsePattern(cleanedPattern);
    const newObj = generator(obj);
    return newObj;
};
exports.CustomJsonBuilder = CustomJsonBuilder;
exports.default = exports.CustomJsonBuilder;
