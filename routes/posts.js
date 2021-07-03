const express = require("express") ;
const router = express.Router();
const { getPost, addPost, deletePost } =require ('../controllers/posts');


// creating routes
router.post('/add', addPost);
router.get('/', getPost);
router.delete('/:id', deletePost);

module.exports = router