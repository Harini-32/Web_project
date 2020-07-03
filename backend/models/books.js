const mongoose = require("mongoose");

const BookSchema = mongoose.Schema({
  id: String,
  title: String,
  subtitle: String,
  image: String,
  authors: Array,
  rating: String,
  categories: Array,
  pubDate: String,
});

const favBooksSchema = mongoose.Schema({
  book: BookSchema,
  userId: String,
});

module.exports = mongoose.model("favorites", favBooksSchema);
