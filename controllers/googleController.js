// Dependencies
var books = require('google-books-search');

// Defining CRUB methods for google
module.exports = {
    findAll: (req, res) => {
        books.search('Professional JavaScript for Web Developers', function (error, results) {
            if (!error) {
                res.json(results)
            } else {
                console.log(error);
            }
        })
    }
};