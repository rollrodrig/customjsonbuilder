"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomJsonBuilder = exports.generator = exports.valueParser = exports.parsePattern = exports.validator = exports.cleaner = void 0;
const faker_1 = require("@faker-js/faker");
const TIMES = '_times';
const cleaner = (pattern) => {
    pattern = pattern.replace(/\t*\s*/g, '');
    pattern = pattern.replace(/,}/g, '}');
    return pattern;
};
exports.cleaner = cleaner;
const validator = (pattern) => {
    const numberOfLeftBraces = (pattern.match(/{/g) || []).length;
    const numberOfRightBraces = (pattern.match(/}/g) || []).length;
    return numberOfLeftBraces === numberOfRightBraces;
};
exports.validator = validator;
const parsePattern = (pattern) => {
    pattern = pattern.replace(/(\w+):(\w+)/g, '"$1":"$2"');
    pattern = pattern.replace(/(\w+):{/g, '"$1":{');
    const obj = JSON.parse(pattern);
    return obj;
};
exports.parsePattern = parsePattern;
const valueParser = (value) => {
    switch (value) {
        case 'string':
            return faker_1.faker.string.alpha(15);
        case 'number':
            return faker_1.faker.number.int();
        case 'boolean':
            return faker_1.faker.datatype.boolean();
        case 'null':
            return null;
        case 'undefined':
            return undefined;
        case 'empty':
            return '';
        case 'true':
            return true;
        case 'false':
            return false;
        case 'name':
            return faker_1.faker.person.fullName();
        case 'firstname':
            return faker_1.faker.person.firstName();
        case 'lastname':
            return faker_1.faker.person.lastName();
        case 'age':
            return faker_1.faker.number.int({ min: 18, max: 90 });
        case 'age18':
            return faker_1.faker.number.int({ min: 18, max: 90 });
        case 'agekid':
            return faker_1.faker.number.int({ min: 1, max: 17 });
        case 'username':
            return faker_1.faker.internet.userName();
        case 'email':
            return faker_1.faker.internet.email();
        case 'password':
            return faker_1.faker.internet.password();
        case 'uuid':
            return faker_1.faker.string.uuid();
        case 'title':
            return faker_1.faker.lorem.sentence();
        case 'text':
            return faker_1.faker.lorem.paragraph();
        case 'word':
            return faker_1.faker.lorem.word();
        case 'words':
            return faker_1.faker.lorem.words();
        case 'paragraph':
            return faker_1.faker.lorem.paragraph();
        case 'paragraphs':
            return faker_1.faker.lorem.paragraphs();
        case 'date':
            return faker_1.faker.date.recent().toISOString();
        default:
            return value;
    }
};
exports.valueParser = valueParser;
const generator = (obj) => {
    // specify the number of times the object should be generated
    // pattern {a:string, _times:2}
    // return [{a:'abc'},{a:'bcd'}]
    const timesKey = Object.keys(obj).find((key) => key === TIMES);
    if (timesKey) {
        // return an array of objects
        const times = parseInt(obj._times);
        const tmpArrObjs = [];
        delete obj[TIMES];
        for (let i = 0; i < times; i++) {
            tmpArrObjs.push((0, exports.generator)(Object.assign({}, obj)));
        }
        return tmpArrObjs;
    }
    else {
        // return the object with the values parsed
        Object.entries(obj).forEach(([key, value]) => {
            if (typeof value === 'object') {
                // go deep if the value is an object
                obj[key] = (0, exports.generator)(Object.assign({}, value));
            }
            else {
                // if the value is not an object, parse it
                obj[key] = (0, exports.valueParser)(value);
            }
        });
        // when array of values is needed
        // pattern {_:string, _times:3}
        // return ['a','b','c']
        if (Object.keys(obj).includes('_')) {
            return obj._;
        }
        return obj;
    }
};
exports.generator = generator;
const CustomJsonBuilder = (pattern) => {
    const isValid = (0, exports.validator)(pattern);
    if (!isValid) {
        throw new Error('Invalid pattern');
    }
    const cleanedPattern = (0, exports.cleaner)(pattern);
    const obj = (0, exports.parsePattern)(cleanedPattern);
    const newObj = (0, exports.generator)(obj);
    return newObj;
};
exports.CustomJsonBuilder = CustomJsonBuilder;
exports.default = exports.CustomJsonBuilder;
