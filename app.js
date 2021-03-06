const express = require('express');
const nunjucks = require('nunjucks');
const app = express();

app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', { noCache: true });

var locals = {
  title: 'An Example',
  people: [
      { name: 'Gandalf'},
      { name: 'Frodo' },
      { name: 'Hermione'}
  ]
};

nunjucks.render('index.html', locals, function(err, output) {
  if (err) console.log(err);
  console.log(output);
});

app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

app.get('/', (req, res) => {
  //res.send('hello');
  //const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
  res.render('index', locals);
});

app.get('/news', (req, res) => {
  res.send('News');
});

app.listen(3000);

console.log()
