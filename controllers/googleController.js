// Dependencies
const axios = require("axios");
const db = require("../models");

// Defining CRUB methods for google , Filter function used to make sure we only get new books
module.exports = {
    findAll: (req, res) => {
        var books = require('google-books-search');
        books.search('Professional JavaScript for Web Developers', function (error, results) {
            if (!error) {
                res.json(results);
            } else {
                console.log(error);
            }
        })
    }
};