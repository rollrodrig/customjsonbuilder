'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const query_1 = require("./src/query");
// Constants
const PORT = 3000;
const HOST = '0.0.0.0';
// App
const app = express();
app.get('/', (req, res) => {
    res.send('Hello world :)');
});
app.get('/q/', query_1.query);
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
