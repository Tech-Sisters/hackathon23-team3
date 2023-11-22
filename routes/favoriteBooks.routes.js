var express = require('express');
var router = express.Router();
 
const favoritesControllers = require('../controllers/favoriteBooks.controllers');

router.get('/favoriteBooks', favoritesControllers.getAll);
router.get('/favoriteBooks/:id', favoritesControllers.getSinglefavorites);
router.post('/favoriteBooks', favoritesControllers.create);
router.post('/favoriteBooks/filter', favoritesControllers.getWithQuery);


module.exports = router;   
