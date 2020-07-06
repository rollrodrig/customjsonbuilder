"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Validator = void 0;
var Validator = (function () {
    function Validator() {
        this.leftBraces = 0;
        this.rightBraces = 0;
        this.leftSquaresBraces = 0;
        this.rightSquaresBraces = 0;
    }
    Validator.prototype.countBraces = function (char) {
        if (char === "{") {
            this.leftBraces++;
        }
        if (char === "}") {
            this.rightBraces++;
        }
    };
    Validator.prototype.countSquareBraces = function (char) {
        if (char === "[") {
            this.leftSquaresBraces++;
        }
        if (char === "]") {
            this.rightSquaresBraces++;
        }
    };
    Validator.prototype.run = function (pattern) {
        this.leftBraces = 0;
        this.rightBraces = 0;
        this.leftSquaresBraces = 0;
        this.rightSquaresBraces = 0;
        for (var x = 0; x < pattern.length; x++) {
            this.countBraces(pattern.charAt(x));
            this.countSquareBraces(pattern.charAt(x));
        }
        return (this.leftBraces === this.rightBraces &&
            this.leftSquaresBraces === this.rightSquaresBraces);
    };
    return Validator;
}());
exports.Validator = Validator;
