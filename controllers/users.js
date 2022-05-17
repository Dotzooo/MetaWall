const handleSuccess = require('../service/handleSuccess')
const handleError = require('../service/handleError')

const User = require('../model/user')

const users = {
    async getUsers(req, res, next) {
        const allUsers = await User.find()
        handleSuccess(res, allUsers)
    }
}

module.exports = users;