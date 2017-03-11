var express = require('express')

var app = express();
var port = 8082;

app.addEventListener(8082, function(err){
    console.log('magic happend on port'+ port);
})