const mongoose = require('mongoose');
const schema = mongoose.Schema;
const Issue = require('./issue');

const projectSchema = new schema({
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
        required: false
    },
    label: {
        type: String,
        required: false
    },
    priority: {
        type: String,
        required: false
    },
    assignedBy: {
        type: String,
        required: false
    },
    assignee: {
        type: String,
        required: false
    },
    issues: [
        {type: schema.Types.ObjectId, ref: 'Issue'}
    ]
})

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;