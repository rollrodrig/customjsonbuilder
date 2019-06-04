"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const faker_1 = __importDefault(require("faker"));
const Primitives_1 = require("../descriptive/Primitives");
const NonPromitives_1 = require("../descriptive/NonPromitives");
exports.fakerGenerator = (value) => {
    let generated = faker_1.default.random.word();
    switch (value) {
        case Primitives_1.Primitives.string:
            generated = faker_1.default.random.word();
            break;
        case Primitives_1.Primitives.number:
            generated = faker_1.default.random.number();
            break;
        case Primitives_1.Primitives.boolean:
            generated = faker_1.default.random.boolean();
            break;
        case Primitives_1.Primitives.null:
            generated = null;
            break;
        case Primitives_1.Primitives.undefined:
            generated = undefined;
            break;
        case Primitives_1.Primitives.empty:
            generated = "";
            break;
        case NonPromitives_1.NonPromitives.username:
            generated = faker_1.default.internet.userName();
            break;
        case NonPromitives_1.NonPromitives.firstName:
            generated = faker_1.default.name.firstName();
            break;
        case NonPromitives_1.NonPromitives.lastName:
            generated = faker_1.default.name.lastName();
            break;
        case NonPromitives_1.NonPromitives.email:
            generated = faker_1.default.internet.email();
            break;
        case NonPromitives_1.NonPromitives.word:
            generated = faker_1.default.lorem.word();
            break;
        case NonPromitives_1.NonPromitives.words:
            generated = faker_1.default.lorem.words();
            break;
        case NonPromitives_1.NonPromitives.title:
            generated = faker_1.default.lorem.sentence();
            break;
        case NonPromitives_1.NonPromitives.sentence:
            generated = faker_1.default.lorem.sentence();
            break;
        case NonPromitives_1.NonPromitives.paragraph:
            generated = faker_1.default.lorem.paragraph();
            break;
        case NonPromitives_1.NonPromitives.paragraphs:
            generated = faker_1.default.lorem.paragraphs();
            break;
        case NonPromitives_1.NonPromitives.text:
            generated = faker_1.default.lorem.text();
            break;
    }
    return generated;
};
