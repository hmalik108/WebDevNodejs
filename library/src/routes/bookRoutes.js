var express = require('express');

var bookRouter = express.Router();


var books = [
    
    {
        title: 'Book Title 1',
        genre: 'Hstorical',
        author: 'Adam Dan',
        read: false
    },
    {
        title: 'Book Title 2',
        genre: 'Hstorical',
        author: 'Adam Dan',
        read: false
    },
    {
        title: 'Book Title 3',
        genre: 'Hstorical',
        author: 'Adam Dan',
        read: false
    },
    {
        title: 'Book Title 4',
        genre: 'Hstorical',
        author: 'Adam Dan',
        read: false
    }
    
    
]


bookRouter.route('/')
    .get(function (req, res) {
        res.render('books', {
            title: ' Hello from ejs',
            nav: [{
                Link: '/Books',
                Text: 'Books'
        }, {
                Link: '/Author',
                Text: 'Authors'
        }],
            books: books
        });
    });

bookRouter.route('/single')
    .get(function (req, res) {
        res.send("Hello Single Books");
    });

module.exports = bookRouter;