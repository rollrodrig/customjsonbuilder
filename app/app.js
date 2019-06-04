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
    let m = { "READ!!": "Try this example http://localhost:6500/q/?q={name:string}" };
    res.end(JSON.stringify(m));
});
app.get('/q/', query_1.query);
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
