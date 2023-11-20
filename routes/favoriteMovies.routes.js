var express = require('express');
var router = express.Router();
 
const favoritesControllers = require('../controllers/favoriteMovies.controllers');

router.get('/favoriteMovies', favoritesControllers.getAll);
router.get('/favoriteMovies/:id', favoritesControllers.getSinglefavorites);
router.get('/favoriteMovies/user/:id', favoritesControllers.getfavoritesByUserId);
router.post('/favoriteMovies', favoritesControllers.create);
router.post('/favoriteMovies/filter', favoritesControllers.getWithQuery);


module.exports = router;   
