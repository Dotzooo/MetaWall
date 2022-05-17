const mongoose = require('mongoose');


const commentSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.ObjectId,
            ref: 'user',
            required: [true, 'User Id 未填寫']
        },
        content: {
            type: String,
            required: [true, 'content 未填寫']
        },
        createAt: {
            type: Date,
            default: Date.now,
            select: false
        },
    },
    {
        versionKey: false
    }
)


const postsSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'user',
        required: [true, 'User Id 未填寫']
    },
    tags: [
        {
            type: String,
            required: [true, '貼文標籤 tags 未填寫']
        }
    ],
    type: {
        type: String,
        enum: ['global', 'personal'],
        default: 'global'
    },
    image: {
        type: String,
        default: ""
    },
    createAt: {
        type: Date,
        default: Date.now
    },
    content: {
        type: String,
        required: [true, 'Content 未填寫'],
    },
    likes: {
        type: Number,
        default: 0
    },
    comments: [ commentSchema ],
});


const posts = mongoose.model(
    'posts',
    postsSchema
);

module.exports = posts;