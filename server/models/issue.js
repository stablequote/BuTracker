const mongoose = require('mongoose');
const schema = mongoose.Schema;

const issueSchema = new schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    },
    dueDate: {
        type: Date,
    },
    status: {
        type: String,
        required: true
    },
    label: {
        type: String,
        required: false
    },
    priority: {
        type: String,
        required: true
    },
    comment: {
        type: String,
    },
    image: {
        type: String,
    },
    assignedBy: {
        type: String,
        required: true
    },
    assignee: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    file: {
        type: String,
    },
    history: {
        type: String,
    }
    
})

const Issue = mongoose.model('Issue', issueSchema);

module.exports = Issue;