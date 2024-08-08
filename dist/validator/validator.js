"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Validator = void 0;
class Validator {
    constructor() {
        this.leftBraces = 0;
        this.rightBraces = 0;
        this.leftSquaresBraces = 0;
        this.rightSquaresBraces = 0;
    }
    countBraces(char) {
        if (char === '{') {
            this.leftBraces++;
        }
        if (char === '}') {
            this.rightBraces++;
        }
    }
    countSquareBraces(char) {
        if (char === '[') {
            this.leftSquaresBraces++;
        }
        if (char === ']') {
            this.rightSquaresBraces++;
        }
    }
    run(pattern) {
        this.leftBraces = 0;
        this.rightBraces = 0;
        this.leftSquaresBraces = 0;
        this.rightSquaresBraces = 0;
        const l = pattern.length;
        for (let x = 0; x < l; x++) {
            this.countBraces(pattern.charAt(x));
            this.countSquareBraces(pattern.charAt(x));
        }
        return (this.leftBraces === this.rightBraces &&
            this.leftSquaresBraces === this.rightSquaresBraces);
    }
}
exports.Validator = Validator;
