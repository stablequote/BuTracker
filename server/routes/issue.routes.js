const express = require('express');
const router = express.Router();

const issueController = require('../controller/issue.controller');

// const { createissue, getissues, getissue, updateissue, deleteissue } = require('../controller/issue.controller')

// create issue (post)
router.post('/create', issueController.createIssue)
router.post('/:id/add-comment', issueController.createIssueComment)

// list all issues
router.get('/', issueController.getIssues)

// list single issue
router.get('/:id', issueController.getIssue)

// update issues
router.put('/:id', issueController.updateIssue)

// delete issue
router.delete('/:id', issueController.deleteIssue)

module.exports = router;