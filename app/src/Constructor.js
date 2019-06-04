"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SpaceCleaner_1 = require("./singleTask/SpaceCleaner");
const isObject_1 = require("./validator/isObject");
const isArray_1 = require("./validator/isArray");
const RemoveCurlyBraces_1 = require("./singleTask/RemoveCurlyBraces");
const RemoveSquareBrackets_1 = require("./singleTask/RemoveSquareBrackets");
const ComaDivider_1 = require("./dividers/ComaDivider");
const KeyValueDivider_1 = require("./dividers/KeyValueDivider");
class Constructor {
    constructor(string) {
        this.string = string;
    }
    go() {
        this.string = SpaceCleaner_1.spaceCleaner(this.string);
        if (isObject_1.isObject(this.string)) {
            this.string = RemoveCurlyBraces_1.removeCurlyBraces(this.string);
        }
        if (isArray_1.isArray(this.string)) {
            this.string = RemoveSquareBrackets_1.removeSquareBrackets(this.string);
        }
        this.commaDivided = ComaDivider_1.comaDivider(this.string);
        this.commaDivided.map((couple) => {
            let kv = KeyValueDivider_1.keyValueDivider(couple);
        });
    }
    end() {
    }
}
exports.default = Constructor;
