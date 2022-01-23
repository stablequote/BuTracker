const mongoose = require('mongoose');
const schema = mongoose.Schema;
const Issue = require('./issue');

const userSchema = new schema({
    firstName: {
        type: 'string',
        required: true
    },
    lastName: {
        type: 'string',
        required: false
    },
    email: {
        type: String,
        required: false
    },
    username: {
        type: String,
        required: false
    },
    password: {
        type: String,
        required: true
    },
    salt: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now
    },
    role: {
        type: String,
        required: true,
    },
    photo: {
        type: String,
    },
    issues: [
        {type: schema.Types.ObjectId, ref: 'Issue'}
    ]
})

const User = mongoose.model('User', userSchema);

module.exports = User;