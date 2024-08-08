"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cleaner = void 0;
class Cleaner {
    run(pattern) {
        pattern = pattern.replace(/\t*\s*/g, '');
        pattern = pattern.replace(/,}/g, '}');
        return pattern;
    }
}
exports.Cleaner = Cleaner;
