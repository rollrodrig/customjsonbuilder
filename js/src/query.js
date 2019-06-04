"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Builder_1 = __importDefault(require("./Builder"));
exports.query = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    let builder = new Builder_1.default(req.query.q);
    res.end(JSON.stringify(builder.getResponse()));
};
