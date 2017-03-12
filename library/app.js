var express = require('express');

var app = express();
var port = process.env.PORT || 8081;


//var bookRouter = express.Router();

var nav = [{
    Link: '/Books',
    Text: 'Book'
        }, {
    Link: '/Authors',
    Text: 'Author'
        }];
app.use(express.static('public'));
app.set('views', './src/views');
var bookRouter = require('./src/routes/bookRoutes');

app.set('view engine', 'ejs');

app.use('/Books', bookRouter);

app.get('/', function (req, res) {
    res.render('index', {
        title: ' Hello from ejs',
        nav: [{
            Link: '/Books',
            Text: 'Books'
        }, {
            Link: '/Author',
            Text: 'Authors'
        }]
    });
});

app.get('/books', function (req, res) {
    res.send('Hello books');
});

app.listen(port, function (err) {
    console.log('magic happens on port' + port);
});