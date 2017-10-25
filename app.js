const express = require('express')
const app = express()

const sassMiddleware = require('node-sass-middleware');
const path = require('path');


app.use(sassMiddleware({
  src: path.join(__dirname, 'sass'),
  dest: path.join(__dirname, 'public/css'),
  debug: true,
  outputStyle: 'compressed',
  prefix:  '/prefix'
}));

app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
  res.sendfile('index.html');

})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
