var express = require('express');
var router = express.Router();

const booksControllers = require('../controllers/books.controllers');

router.get('/books', booksControllers.getAll);
router.get('/books/:id', booksControllers.getSingleBook);
router.post('/books', booksControllers.create); 
router.post('/books/search', booksControllers.searchWithTitle); 
router.patch('/books/:id', booksControllers.updateSingleBook);
router.delete('/books/:id', booksControllers.removeSingleBook);

module.exports = router; 
  