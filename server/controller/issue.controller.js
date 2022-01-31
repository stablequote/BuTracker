const express = require('express');
const Issue = require('../models/issue');

// createIssue, getIssues, getIssue, updateIssue, deleteIssue 

const createIssue = async (req, res) => {
    const issue = new Issue(req.body)
    try {
        await issue.save()
        return res.status(200).json({
          message: "Successfully added issue!"
        })
    } catch (err) {
        console.log(err);
    }
}

const createIssueComment = async (req, res) => {
    const comment = req.body.comment;
    const { id } = req.params;
    try{
        const newComment = await Issue.findByIdAndUpdate(id, { comment: comment })
        await newComment.save();
        return res.status(200).json({
            message: "Successfully created comment!"
        })
    }
    catch(err) {
        console.log(err);
    }
}

const getIssues = async (req, res) => {
    const issues = await Issue.find({});
    res.send(issues);
}

const getIssue = async (req, res) => {
    const { id } = req.params;
    const issue = await Issue.findById(id)
    res.send(issue);
}

const updateIssue = async (req, res) => {
    const { id } = req.params;
    const issue = await Issue.findByIdAndUpdate(id, req.body)
    res.send(issue);
}

const deleteIssue = async (req, res) => {
    const { id } = req.params;
    const issue = await Issue.findByIdAndDelete(id)
    res.send(issue);
}

module.exports = {
    createIssue, getIssues, getIssue, updateIssue, deleteIssue, createIssueComment
}