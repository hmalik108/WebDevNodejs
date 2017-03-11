var express = require('express')

var app = express();
var port = 8082;


app.use(express.static('public'));
app.use(express.static('src/views'));



app.get('/' , function(req,res){
    res.send('Hello World');
});

app.get('/books', function(req, res){
    res.send('Hello books');
});

app.listen(8082, function(err){
    console.log('magic happens on port'+ port);
})