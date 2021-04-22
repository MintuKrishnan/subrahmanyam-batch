const express = require('express');
const app = express();

const newMiddleware = (req, res, next) => {
  console.log('i am a middleware');
  next();
};

app.get('/about', newMiddleware, (request, response) => {
  response.send('about');
});

app.get('/home', newMiddleware, (request, response) => {
  response.send('home');
});

app.get('*', (request, response) => {
  response.send('error');
});

app.listen(3005);
