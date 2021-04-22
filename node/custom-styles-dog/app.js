const dogsObject = require('./db/dogs.json');
const expHbs = require('express-handlebars');
const express = require('express');
const app = express();

app.engine('hbs', expHbs({ extname: 'hbs' }));
app.set('view engine', 'hbs');

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('home');
});

app.post('/profile', (req, res) => {
  console.log(req.body);
  const { name, ownerName } = req.body;
  const keys = Object.keys(dogsObject);

  let dogFound = false;
  keys.forEach(prop => {
    const dog = dogsObject[prop];

    if (dog.name === name && dog.OwnerName === ownerName) {
      dogFound = true;
      res.render('profile', dog);
      return false;
    }
  });

  if (dogFound === false) {
    res.send('Dog not found');
  }
});

app.listen(5001, () => console.log(`Listening...`));
