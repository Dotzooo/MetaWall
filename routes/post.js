var express = require('express');
var router = express.Router();

const PostsControllers = require('../controllers/posts')

// 取得貼文
router.get('/posts', PostsControllers.getPosts)
// 新增貼文
router.post('/post', PostsControllers.createPosts)

module.exports = router;
