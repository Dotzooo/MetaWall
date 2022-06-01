const mongoose = require('mongoose');

const postsSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.ObjectId,
            ref: 'User',
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
        createdAt: {
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
    },
    {
        versionKey: false
    }
);


const posts = mongoose.model(
    'posts',
    postsSchema
);

module.exports = posts;