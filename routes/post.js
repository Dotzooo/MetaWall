var express = require('express');
var router = express.Router();

const PostsControllers = require('../controllers/posts')

// 取得貼文
router.get('/', PostsControllers.getPosts)
// 新增貼文
router.post('/', PostsControllers.createPosts)
// 留言
router.post('/comment/:postId', PostsControllers.createComment)
module.exports = router;
