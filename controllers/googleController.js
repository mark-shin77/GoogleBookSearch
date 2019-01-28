// Dependencies
const axios = require("axios");
const db = require("../models");

// Defining CRUB methods for google , Filter function used to make sure we only get new books
module.exports = {
    findAll: (req, res) => {
        const { query : params } = req;
        axios.get("https://www.googleapis.com/books/v1/volumes", { params })
            .then( results => results.data.items )
            .then()
    }
}