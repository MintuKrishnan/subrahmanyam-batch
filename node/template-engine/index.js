const express = require('express');
const app = express();

app.set('view engine', 'hbs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index', { title: 'new file' });
});

app.listen(3000);
