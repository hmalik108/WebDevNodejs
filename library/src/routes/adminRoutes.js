var express = require('express');

var adminRouter = express.Router();
var mongodb = require('mongodb').MongoClient;

var books = [

    {
        title: 'Scion of Ikshvaku',
        genre: 'Mythological',
        author: 'Amish Tripathi',
        bookId: 24709327,
        read: false
    },
    {
        title: 'Norse Mythology',
        genre: 'Fiction',
        author: 'Neil Gaiman',
        bookId: 30831912,
        read: false
    },
    {
        title: 'We Are Okay',
        genre: 'Fiction',
        author: 'Nina LaCour',
        read: false
    }, {
        title: 'Pachinko',
        genre: 'Fiction',
        author: 'Min Jin Leey',
        read: false
    }



];

var router = function (nav) {

    adminRouter.route('/addBooks')
        .get(function (req, res) {
            var url = 'mongodb://localhost:27017/libraryApp';
            mongodb.connect(url, function (err, db) {
                console.log("Connected correctly to server");
                var collection = db.collection('books');
                collection.insertMany(books, function (err, results) {
                     console.log("Got results");
                    res.send(results);
                    db.close();
                });
            });

            // res.send('Inserting Books');
        });

    return adminRouter;
};

module.exports = router;