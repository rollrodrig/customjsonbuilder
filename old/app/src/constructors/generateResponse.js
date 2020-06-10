"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fakerGenerator_1 = require("./fakerGenerator");
exports.generateResponse = (build) => {
    const response = {};
    build.map((b) => {
        if (b.value === "object") {
            response[b.key] = exports.generateResponse(b.nested);
        }
        else if (b.value === "array") {
            const arr = [];
            for (let i = 0; i < b.times; i++) {
                arr.push(exports.generateResponse(b.nested));
            }
            response[b.key] = arr;
        }
        else {
            response[b.key] = fakerGenerator_1.fakerGenerator(b.value);
        }
    });
    return response;
};
