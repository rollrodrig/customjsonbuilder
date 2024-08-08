"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Error = void 0;
const cleaner_1 = require("./cleaner/cleaner");
const validator_1 = require("./validator/validator");
const generator_1 = require("./generator/generator");
const reader_1 = require("./reader/reader");
class CustomJsonBuilder {
    static build(pattern) {
        const cleaner = new cleaner_1.Cleaner();
        pattern = cleaner.run(pattern);
        const validator = new validator_1.Validator();
        const validPattern = validator.run(pattern);
        console.log(validPattern);
        if (validPattern) {
            const reader = new reader_1.Reader(pattern);
            const generator = new generator_1.Generator(reader.scan());
            const output = generator.generate();
            return output;
        }
        else {
            return Error.missingBrances();
        }
    }
}
exports.default = CustomJsonBuilder;
class Error {
    static missingBrances() {
        return {
            error: 'There is one missing ] or [ or } or {',
        };
    }
}
exports.Error = Error;
