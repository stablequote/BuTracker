const express = require('express');
const project = require('../models/project');

const getProjects = async (req, res, next) => {
    const projects = await project.find({});
    res.send(projects);
    res.send("project route from user file!!")
    console.log('Hitting project route form user test file!');
    next();
}

module.exports = {
    getProjects,
}