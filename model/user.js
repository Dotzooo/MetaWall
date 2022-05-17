const mongoose = require('mongoose');
const usersSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: [true, 'Email 未填寫'],
            select: false,
            trim: true,
            lowercase: true,
            unique: true,
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, '請填寫正確的 Email 信箱'],
        },
        password: {
            type: String,
            required: [true, 'password 必填'],
            select: false,
            trim: true,
            lowercase: true,
        },
        name: {
            type: String,
            trim: true,
            required: [true, 'Name 未填寫'],
        },
        photoUrl: {
            type: String,
            default: '',
        },
        createdAt: {
            type: Date,
            default: Date.now
        },
    },
    {
        versionKey: false
    }
)

const User = mongoose.model('User', usersSchema);

module.exports = User