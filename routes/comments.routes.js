var express = require('express');
var router = express.Router();
 
const commentsControllers = require('../controllers/comments.controllers');

router.get('/comments', commentsControllers.getAll);
router.get('/comments/:id', commentsControllers.getSingleComment);
router.post('/comments', commentsControllers.create);
router.post('/comments/filter', commentsControllers.getWithQuery);
router.patch('/comments/:id', commentsControllers.updateSingleComment);
router.delete('/comments/:id', commentsControllers.removeSingleComment);


module.exports = router;   
