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

var bookRouter = require('./src/routes/bookRoutes')(nav);
var adminRouter = require('./src/routes/adminRoutes')(nav);

app.use(express.static('public'));
app.set('views', './src/views');

app.set('view engine', 'ejs');

app.use('/Books', bookRouter);
app.use('/Admin', adminRouter);

app.get('/', function (req, res) {
    res.render('index', {
        title: ' Hello from ejs',
        nav: [{
            Link: '/Books',
            Text: 'Book'
        }, {
            Link: '/Author',
            Text: 'Author'
        }]
    });
});

app.get('/books', function (req, res) {
    res.send('Hello books');
});


app.listen(port, function (err) {
    console.log('magic happens on port' + port);
});