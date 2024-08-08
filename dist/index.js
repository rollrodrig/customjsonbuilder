"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const builder_1 = __importDefault(require("./builder"));
const input = `
{
    name:string,
    age:{
        year:number
    },
    id:{
        main:number,
        second:number
    }
}`;
const response = builder_1.default.build(input);
console.log(response);
