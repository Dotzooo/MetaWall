const handleSuccess = require('../service/handleSuccess')
const handleError = require('../service/handleError')

const User = require('../model/user')

const users = {
    async userSingin(req, res, next) {
        try {
            const { body } = req
            if (body.content) {
                const newUser = await User.create({
                    email: data.email,
                    name: data.name,
                    photo: data.photo
                })
                handleSuccess(res, newUser)
            } else {
                handleError(res)
            }
        } catch (error) {
            handleError(res, error)
        }
    },
    // async getUsers(req, res) {
    //     const allUsers = await User.find()
    //     handleSuccess(res, allUsers)
    // }
}

module.exports = users;