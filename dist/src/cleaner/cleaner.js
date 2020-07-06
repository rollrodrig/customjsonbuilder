"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cleaner = void 0;
var Cleaner = (function () {
    function Cleaner() {
    }
    Cleaner.prototype.run = function (pattern) {
        pattern = pattern.replace(/\t*\s*/g, "");
        pattern = pattern.replace(/,}/g, "}");
        return pattern;
    };
    return Cleaner;
}());
exports.Cleaner = Cleaner;
