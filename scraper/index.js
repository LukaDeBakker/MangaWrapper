const express = require('Express');

const app = express();
const port = 5000;

app.get('/', function (req, res) {
    res.send('GET request to homepage')
  })