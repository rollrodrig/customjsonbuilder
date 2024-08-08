"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const builder_1 = __importDefault(require("./builder"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3300;
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Content-Type', 'application/json');
    next();
});
app.all('/:pattern?', (req, res) => {
    const pattern = req.params.pattern;
    if (pattern) {
        console.log(pattern);
        const response = builder_1.default.build(pattern);
        res.json(response);
    }
    else {
        res.end('Try this example\n\nhttp://localhost:' +
            port +
            '/{user:number,posts:{id:uuid,title:string,$times:3}}');
    }
});
app.listen(port, () => {
    console.log(`App running at on http://localhost:${port}`);
});
