// Defining CRUB methods for google
module.exports = {
    findAll: (req, res) => {
        var books = require('google-books-search');
        books.search('Professional JavaScript for Web Developers', function (error, results) {
            if (!error) {
                res.json(results)
            } else {
                console.log(error);
            }
        })
    }
};