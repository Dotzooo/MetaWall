const mongoose = require('mongoose');

const handleSuccess = require('../service/handleSuccess')
const handleError = require('../service/handleError')

const User = require('../model/user')
const Posts = require('../model/post')

const post = {
    async getPosts(req, res) {

        const { query } = req

        // 排序
        const sort = query.sort === 'asc' ? 'createdAt' : '-createdAt'
        // 關鍵字
        const q = query.q !== undefined ? { "content": new RegExp(query.q.trim()) } : {}

        const allPosts = await Posts.find(q).populate({
            path: 'user',
            select: 'name photoUrl'
        }).sort(sort)

        handleSuccess(res, allPosts)
    },
    async createPosts(req, res, next) {
        try {
            const { body } = req
            const isValid = mongoose.Types.ObjectId.isValid(body.userID)
            if (!isValid) {
                return handleError(res, '資料錯誤，請重新操作')
            }

            const isExist = await User.findById(body.userID)
            if (!isExist) {
                return handleError(res, '該用戶不存在，請重新操作')
            }


            if (body.content) {
                const newPost = await Posts.create({
                    user: body.userID ? body.userID : '628af3325625388ec1783221',
                    name: body.name,
                    content: body.content,
                    tags: body.tags,
                    image: body.image
                })
                handleSuccess(res, newPost)
            } else {
                handleError(res)
            }
        } catch (error) {
            handleError(res, error)
        }
    }
}

module.exports = post