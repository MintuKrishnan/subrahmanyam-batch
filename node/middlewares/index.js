const express = require('express');
const app = express();
const chalkAnimation = require('chalk-animation');

// chalkAnimation.rainbow('Lorem ipsum dolor sit amet');

let users = [
  {
    id: 1,
    username: 'Mintu',
    age: 25,
  },
  {
    id: 2,
    username: 'debasis',
    age: 20,
  },
  {
    id: 2,
    username: 'sadaf',
    age: 23,
  },
];

const newMiddleware = (req, res, next) => {
  chalkAnimation.rainbow('i am a middleware');

  // console.log(chalkAnimation.rainbow('i am a middleware'));
  next();
};

app.get('/users', newMiddleware, (request, response) => {
  // console.log(request.query.username);

  // users.forEach((el) => {
  //   console.log(el.username);
  // });

  // const new_user = users.map((el) => {
  //   return el.username;
  // });
  // console.log(new_user);

  let newUser = [...users];
  if (request.query.username) {
    newUser = users.filter((el) => {
      return el.username == request.query.username;
    });
  }
  response.send(newUser);
});

app.get('/', newMiddleware, (request, response) => {
  response.send('home');
});

app.get('*', (request, response) => {
  response.send('error');
});

app.listen(3005);
