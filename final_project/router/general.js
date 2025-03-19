const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();


public_users.post("/register", (req,res) => {
  const username = req.body.username
  const password = req.body.password

  let registered = users.filter(user => user.username == username)
  if (registered.length > 0){
    return res.status(400).json({message: "The username already exists."});
  }
  users.push({'username': username, 'password': password})
  return res.status(200).json({message: "Registered successfully."});
});

// Get the book list available in the shop
public_users.get('/',function (req, res) {
  return res.status(200).json(books);
});

// Get book details based on ISBN
public_users.get('/isbn/:isbn',function (req, res) {
  const isbn = req.params.isbn;
  return res.status(200).json(books[isbn]);
 });
  
// Get book details based on author
public_users.get('/author/:author',function (req, res) {
  const author = req.params.author;
  const booksArray = Object.entries(books);
  const filteredBooks =  Object.fromEntries(booksArray.filter(([isbn, book]) => book.author.toLowerCase().includes(author.toLowerCase())));
  return res.status(200).json(filteredBooks);
});

// Get all books based on title
public_users.get('/title/:title',function (req, res) {
  const title = req.params.title;
  const booksArray = Object.entries(books);
  const filteredBooks =  Object.fromEntries(booksArray.filter(([isbn, book]) => book.title.toLowerCase().includes(title.toLowerCase())));
  return res.status(200).json(filteredBooks);
});

//  Get book review
public_users.get('/review/:isbn',function (req, res) {
  const isbn = req.params.isbn;
  return res.status(200).json(books[isbn].reviews);
});

module.exports.general = public_users;


