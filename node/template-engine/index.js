const express = require('express');
const app = express();
app.listen(3000);

app.set('view engine', 'hbs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index', { title: 'new file' });
});
