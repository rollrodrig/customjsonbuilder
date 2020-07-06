"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Error = void 0;
var cleaner_1 = require("./cleaner/cleaner");
var validator_1 = require("./validator/validator");
var generator_1 = require("./generator/generator");
var reader_1 = require("./reader/reader");
var CustomJsonBuilder = (function () {
    function CustomJsonBuilder() {
    }
    CustomJsonBuilder.build = function (pattern) {
        var cleaner = new cleaner_1.Cleaner();
        var validator = new validator_1.Validator();
        pattern = cleaner.run(pattern);
        if (validator.run(pattern)) {
            var reader = new reader_1.Reader(pattern);
            var generator = new generator_1.Generator(reader.scan());
            return generator.generate();
        }
        else {
            return Error.missingBrances();
        }
    };
    return CustomJsonBuilder;
}());
exports.default = CustomJsonBuilder;
var Error = (function () {
    function Error() {
    }
    Error.missingBrances = function () {
        return {
            error: "There is one missing ] or [ or } or {",
        };
    };
    return Error;
}());
exports.Error = Error;
