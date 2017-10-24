const express = require('express')
const app = express()

const sassMiddleware = require('node-sass-middleware');
const path = require('path');
app.use(sassMiddleware({
  src: path.join(__dirname, 'sass'),
  dest: path.join(__dirname, 'public/css'),
  debug: true,
  outputStyle: 'compressed',
  prefix:  '/prefix'  // Where prefix is at <link rel="stylesheets" href="prefix/style.css"/>
}));
// Note: you must place sass-middleware *before* `express.static` or else it will
// not work.
app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
  res.sendfile('index.html');

})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
