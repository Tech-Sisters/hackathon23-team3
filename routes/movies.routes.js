var express = require('express');
var router = express.Router();

const moviesControllers = require('../controllers/movies.controllers');

router.get('/movies', moviesControllers.getAll);
router.get('/movies/:id', moviesControllers.getSingleMovie);
router.post('/movies', moviesControllers.create); 
router.post('/movies/search', moviesControllers.searchWithTitle); 
router.patch('/movies/:id', moviesControllers.updateSingleMovie);
router.delete('/movies/:id', moviesControllers.removeSingleMovie);

module.exports = router; 
  