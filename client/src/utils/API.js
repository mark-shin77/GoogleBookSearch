import axios from 'axios';

export default {
    getBooks : function () {
        return axios.get("/api/google");
    },
    saveBook: function(bookData) {
        return axios.post("/api/books", bookData)
    },
    getSavedBooks: function (){
        return axios.get("/api/books");
    },
    deleteBook: function(id) {
        return axios.delete("/api/books/" + id)
    }
}