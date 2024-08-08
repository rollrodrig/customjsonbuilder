"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomNumber = exports.randomString = void 0;
const randomString = () => {
    const s = 'v' +
        Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15);
    return s;
};
exports.randomString = randomString;
const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};
exports.randomNumber = randomNumber;
