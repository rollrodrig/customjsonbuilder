"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValueGenerator = exports.VAR_CHILD_IDENTIFIER = exports.FormatString = exports.ResponseList = exports.ResponseDict = exports.Response = void 0;
const constant_1 = require("../utils/constant");
const generator_1 = require("./generator");
const value_1 = require("./value");
class Response {
    constructor(pattern) {
        this.pattern = pattern;
        this.valueGenerator = new ValueGenerator();
    }
    removeFirstLastBraces() {
        this.pattern = this.pattern.substring(1);
        this.pattern = this.pattern.substring(0, this.pattern.length - 1);
    }
    splitInPairs() {
        return this.pattern.split(',');
    }
}
exports.Response = Response;
class ResponseDict extends Response {
    constructor() {
        super(...arguments);
        this._response = {};
    }
    get response() {
        return this._response;
    }
    addResponse(tmp, pair) {
        const keyValue = pair.split(':');
        const key = keyValue[0];
        const value = keyValue[1];
        tmp[key] = this.valueGenerator.generate(value);
    }
    generate() {
        this.removeFirstLastBraces();
        const pairs = this.splitInPairs();
        const tmp = {};
        pairs.map((pair) => {
            this.addResponse(tmp, pair);
        });
        this._response = tmp;
        return this._response;
    }
}
exports.ResponseDict = ResponseDict;
class ResponseList extends Response {
    constructor() {
        super(...arguments);
        this._response = [];
        this.TIMES = constant_1.OPTION_TIME;
    }
    get response() {
        return this._response;
    }
    addResponse(tmp, pair) {
        const keyValue = pair.split(':');
        const key = keyValue[0];
        const value = keyValue[1];
        if (key !== this.TIMES) {
            tmp[key] = this.valueGenerator.generate(value);
        }
    }
    getTimes() {
        const regex = new RegExp(`\\${this.TIMES}:([0-9]+)`);
        const matchs = this.pattern.match(regex);
        let times = 1;
        if (matchs) {
            times = parseInt(matchs[1]);
            if (times <= 0)
                times = 1;
        }
        return times;
    }
    generate() {
        this.removeFirstLastBraces();
        const times = this.getTimes();
        const pairs = this.splitInPairs();
        for (let i = 0; i < times; i++) {
            const tmp = {};
            pairs.map((pair) => {
                this.addResponse(tmp, pair);
            });
            this._response.push(tmp);
        }
        return this._response;
    }
}
exports.ResponseList = ResponseList;
class FormatString {
    set pattern(value) {
        this._pattern = value;
    }
    get response() {
        return this._response;
    }
    constructor(pattern) {
        this._response = [];
        this._pattern = pattern;
    }
    isItList() {
        return this._pattern.search(`\\${constant_1.OPTION_TIME}`) > -1;
    }
    generate() {
        let formater;
        if (this.isItList()) {
            formater = new ResponseList(this._pattern);
        }
        else {
            formater = new ResponseDict(this._pattern);
        }
        this._response = formater.generate();
        return this._response;
    }
}
exports.FormatString = FormatString;
exports.VAR_CHILD_IDENTIFIER = '___VAR___';
class ValueGenerator {
    constructor() {
        this.value = '';
        this.storage = generator_1.DataStorage.getInstance();
        this.valueFactory = new value_1.ValueGeneratorFactory();
    }
    isChild() {
        return this.value.search(exports.VAR_CHILD_IDENTIFIER) > -1;
    }
    getStorageKey() {
        return this.value.replace(exports.VAR_CHILD_IDENTIFIER, '');
    }
    getFromStorage(storageKey) {
        return this.storage.get(storageKey);
    }
    getFromFactory() {
        return this.valueFactory.get(this.value);
    }
    getContent() {
        let content;
        if (this.isChild()) {
            const storageKey = this.getStorageKey();
            content = this.getFromStorage(storageKey);
        }
        else {
            content = this.getFromFactory();
        }
        return content;
    }
    generate(value) {
        this.value = value;
        return this.getContent();
    }
}
exports.ValueGenerator = ValueGenerator;
