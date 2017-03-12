var express = require('express');

var bookRouter = express.Router();

var router = function(nav){
    
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


];


    bookRouter.route('/')
        .get(function (req, res) {
            res.render('bookListView', {
                title: 'bookListView',
                nav: nav,
                books: books
            });
        });

    bookRouter.route('/:id')
        .get(function (req, res) {
            var id = req.params.id;
            res.render('bookView', {
                title: 'bookView',
                nav: nav,
                book: books[id]
            });
        });

    return bookRouter;
};



//module.exports = bookRouter;
module.exports = router;