const express = require('express');
const router = express.Router();

const UsersControllers = require('../controllers/users')

// 取得所有用戶
router.get('/', UsersControllers.getUsers)

module.exports = router