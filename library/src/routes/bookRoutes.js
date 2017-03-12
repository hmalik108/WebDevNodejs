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
        res.render('bookListView', {
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

bookRouter.route('/:id')
    .get(function (req, res) {
        var id = req.params.id;
        res.render('bookView', {
            title: ' Hello from ejs',
            nav: [{
                Link: '/Books',
                Text: 'Books'
        }, {
                Link: '/Author',
                Text: 'Authors'
        }],
            book: books[id]
        });
    });

module.exports = bookRouter;