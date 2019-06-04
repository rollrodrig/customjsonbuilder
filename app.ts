'use strict';
const express = require('express');
import { query } from './src/query';
// Constants
const PORT = 3000;
const HOST = '0.0.0.0';
// App
const app = express();
app.get('/', (req, res) => {

  let m = {"READ!!":"Try this example http://localhost:6500/q/?q={name:string}"}
  res.end(JSON.stringify(m));
});
app.get('/q/', query);
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);