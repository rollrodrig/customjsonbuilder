'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const query_1 = require("./src/query");
const PORT = process.env.PORT || 6500;
const HOST = '0.0.0.0';
const app = express();
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
app.get('/', (req, res) => {
    let m = { "READ!!": "Try this example http://localhost:" + PORT + "/q/?q={name:string}" };
    res.end(JSON.stringify(m));
});
app.all('/q/', query_1.query);
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
