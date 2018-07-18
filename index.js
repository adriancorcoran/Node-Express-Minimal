const dotenv = require('dotenv').config();
const express = require('express');
const app = express();
const querystring = require('querystring');
const request = require('request-promise');

const apiKey = process.env.MY_KEY;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
