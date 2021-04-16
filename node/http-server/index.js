// const express = require('express');
const fs = require('fs');
const morgan = require('morgan');
const express = require('express');
const axios = require('axios');

const app = express();

app.use(morgan('dev'));
app.use(express.json());

const myname = (req, res, next) => {
  req.debasis = 'debasis';
  console.log('hii desh');
  next();
};

const getUserInfo = (req, res) => {
  const data = fs.readFileSync('users.json', 'utf-8');
  let users = JSON.parse(data);
  console.log(req.debasis);
  if (req.query.username) {
    let response = users.filter((el) => {
      return req.query.username == el.username;
    });
    res.json({ response });
    return;
  }

  res.status(200).json({ users });
};

app.post('/userInfo', (req, res) => {
  const data = fs.readFileSync('users.json', 'utf-8');
  let users = JSON.parse(data);
  const newUser = {
    id: req.body.id || users.length + 1,
    username: req.body.username,
    age: req.body.age,
  };

  users.push(newUser);

  fs.writeFileSync('users.json', JSON.stringify(users));
  // console.log(name);

  res.status(201).json({
    status: 'Success',
    users,
  });
});

app.get('/postWithComment', async (req, res) => {
  const posts = await axios.get('https://jsonplaceholder.typicode.com/posts');
  const comments = await axios.get(
    'https://jsonplaceholder.typicode.com/comments'
  );
  const newusers = [];
  for (i = 0; i < 10; i++) {
    newusers.push(posts.data[i]);
    newusers[i].comments = [];
    start = 5 * i;
    end = start + 5;
    for (start; start < end; start++) {
      newusers[i].comments.push(comments.data[start]);
    }
  }
  res.send(newusers);
});

app.get('/userInfo', myname, getUserInfo);

app.listen(3000, () => console.log('listening'));
