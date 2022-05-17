const express = require('express');
const router = express.Router();

const UsersControllers = require('../controllers/users')

// 用戶註冊
router.post('/user/signin', UsersControllers.userSingin)

// 取得所有用戶
// router.get('/user', UsersControllers.getUsers)

// 取得特定用戶資料
// router.get('/user/:id', UsersControllers.getUser)

module.exports = router