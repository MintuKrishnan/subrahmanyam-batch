// const express = require('express');
const fs = require('fs');
// const path = require('path');
// // import { express } from 'express';
// const app = express();

// app.get('/randomColor', function (req, res) {
//   res.send('Hello World');
// });
// app.get('/currentData', function (req, res) {
//   res.send('Hello data');
// });
// app.get('/joke', function (req, res) {
//   res.send('Hello joke');
// });
// app.get('/quote', function (req, res) {
//   res.send('Hello quote');
// });

// console.log('join: ', path.join(__dirname, '/package.json'));
// console.log('resolve:', path.resolve('package.json'));

// app.post;

// app.listen(3000);
const express = require('express');
const { parse } = require('path');
const app = express();

app.use(express.json());

// app.get('/category', (req, res) => {
//   const { name } = req.query;

//   if (name) {
//     res.send(`Your name that server recieved = ${name}`);
//     return;
//   }
//   res.send('Works');
// });

// app.get('/category/:categoryName', (req, res) => {
//   console.log(req.params);
//   console.log(req.params.categoryName);
//   res.send('Called from main category');
// });

// app.get('/category/:categoryName/:subCategory', (req, res) => {
//   console.log(req.query.name);
//   console.log(req.params.categoryName);
//   res.send('Called from sub category');
// });
// let name = [];

app.get('/userInfo', (req, res) => {
  console.log(name);
  res.status(200).json({ name });
});

app.post('/userInfo', (req, res) => {
  const { name } = req.body;

  fs.appendFileSync('users.json', JSON.stringify(name));
  console.log(name);

  res.status(201).json({
    status: 'Success',
    name,
  });
  // res.send(`Server changed your name to ${req.body.name}`);
  // const newData = { ...res.body };
  // res.appendedValue = 'Express';
  // console.log(newData);
});

app.listen(3000, () => console.log('listening'));
