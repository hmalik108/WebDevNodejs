var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var passport = require('passport');
var session = require('express-session'); 

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
var authRouter = require('./src/routes/authRoutes')(nav);

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(session({secret: 'library'}));

require('./src/config/passport')(app);


app.set('views', './src/views');

app.set('view engine', 'ejs');

app.use('/Books', bookRouter);
app.use('/Admin', adminRouter);
app.use('/Auth', authRouter);

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