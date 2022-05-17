const handleSuccess = require('../service/handleSuccess')
const handleError = require('../service/handleError')

const Posts = require('../model/post')

const post = {
    async getPosts(req, res) {
        const allPosts = await Posts.find()
        handleSuccess(res, allPosts)
    },
    async createPosts(req, res) {
        try {
            const { body } = req
            if (body.content) {
                const newPost = await Posts.create({
                    name: body.name,
                    content: body.content
                })
                handleSuccess(res, newPost)
            } else {
                handleError(res)
            }
        } catch (error) {
            handleError(res, error)
        }
    },
    async createComment(req, res) {
        const { postId } = req.params
        
        let postRes = await Posts.findById(postId)
        if (!postRes) handleError(res, "沒有找到該貼文")

        const { body } = req
        let newComment = await Posts.findByIdAndUpdate(postId, {
            $push: {
                user: body.userId,
                content: body.content,
                likes: req.Body.likes
            }
        })
        handleSuccess(res, newComment)
    }
}

module.exports = post