var express = require('express');

var bookRouter = express.Router();
var mongodb = require('mongodb').MongoClient;   
var objectId = require('mongodb').ObjectId;   


var router = function (nav) {

   
    
    bookRouter.route('/')
        .get(function (req, res) {
            var url = 'mongodb://localhost:27017/libraryApp';
            mongodb.connect(url, function (err, db) {
                var collection = db.collection('books');
                collection.find({}).toArray(function (err, results) {
                    //console.log(results);
                    res.render('bookListView', {
                        title: 'bookListView',
                        nav: nav,
                        books: results
                    });
                    db.close();
                });
            });


        }); 

    bookRouter.route('/:id')
        .get(function (req, res) {
            var id = new objectId(req.params.id);
            var url = 'mongodb://localhost:27017/libraryApp';
            mongodb.connect(url, function (err, db) {
                var collection = db.collection('books');
                collection.findOne({_id: id}, function (err, results) {
                    //console.log(results);
                    res.render('bookView', {
                        title: 'bookView',
                        nav: nav,
                        book: results
                    });
                    db.close();
                });
            });
        });

    return bookRouter; 
};



//module.exports = bookRouter;
module.exports = router;