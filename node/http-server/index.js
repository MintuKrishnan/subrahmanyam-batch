const express = require('express');
const { writeFileSync } = require('fs');
const path = require('path');
// import { express } from 'express';
const app = express();

app.get('/randomColor', function (req, res) {
  res.send('Hello World');
});
app.get('/currentData', function (req, res) {
  res.send('Hello data');
});
app.get('/joke', function (req, res) {
  res.send('Hello joke');
});
app.get('/quote', function (req, res) {
  res.send('Hello quote');
});

console.log('join: ', path.join(__dirname, '/package.json'));
console.log('resolve:', path.resolve('package.json'));

app.listen(3000);
