const users = require('./users')
const { urlencoded } = require('express');
var bodyParser = require('body-parser');
var express = require('express');
var app = express();


app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use('/users', users);



app.listen(3000, '127.0.0.1', () => {
    console.log("App rodando");
});