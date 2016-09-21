var mongoose = require("mongoose");

module.exports.Book = require("./book.js");

mongoose.connect("mongodb://localhost/book-app");
