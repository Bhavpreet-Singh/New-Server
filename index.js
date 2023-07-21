----Javascript File---
const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World');
  console.log(req.query.name);
})

app.get('/peanut', function (req, res) {
  res.send('Hello peanut');
  console.log(req.query);

})

app.listen(3000)
