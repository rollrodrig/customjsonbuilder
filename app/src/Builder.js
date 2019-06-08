"use strict";
const build_1 = require("./constructors/build");
const generateResponse_1 = require("./constructors/generateResponse");
const SpaceCleaner_1 = require("./singleTask/SpaceCleaner");
const isBracesEquals_1 = require("./validator/isBracesEquals");
const isSquareEquals_1 = require("./validator/isSquareEquals");
class Builder {
    constructor(p) {
        this.pattern = p;
    }
    setPattern(p) {
        this.pattern = p;
    }
    validatePattern() {
        this.pattern = SpaceCleaner_1.spaceCleaner(this.pattern);
        if (isBracesEquals_1.isBracesEquals(this.pattern) === false) {
            throw SyntaxError("Syntax error, make sure open and close {} are in the pattern");
        }
        if (isSquareEquals_1.isSquareEquals(this.pattern) === false) {
            throw SyntaxError("Syntax error, make sure open and close [] are in the pattern");
        }
    }
    getResponse() {
        this.validatePattern();
        this.response = generateResponse_1.generateResponse(build_1.build(this.pattern));
        return this.response;
    }
    static generateJson(pattern) {
        let p = SpaceCleaner_1.spaceCleaner(pattern);
        if (isBracesEquals_1.isBracesEquals(p) === false) {
            throw SyntaxError("Syntax error, make sure open and close {} are in the pattern");
        }
        if (isSquareEquals_1.isSquareEquals(p) === false) {
            throw SyntaxError("Syntax error, make sure open and close [] are in the pattern");
        }
        return generateResponse_1.generateResponse(build_1.build(p));
    }
}
module.exports = Builder;
