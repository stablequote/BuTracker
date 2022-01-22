const express = require('express');
const Project = require('../models/project');

// createProject, getProjects, getProject, updateProject, deleteProject 

const createProject = async (req, res) => {
    const project = new Project(req.body)
    try {
        await project.save()
        return res.status(200).json({
          message: "Successfully added project!"
        })
    } catch (err) {
        console.log(err);
    }
    res.send('creating project using postman...')
    console.log('creating project using postman...');
}

const getProjects = async (req, res) => {
    const projects = await Project.find({});
    res.send(projects);
}

const getProject = async (req, res) => {
    const { id } = req.params;
    const project = await Project.findById(id)
    res.send(project);
}

const updateProject = async (req, res) => {
    const { id } = req.params;
    const project = await Project.findByIdAndUpdate(id)
    res.send(project);
}

const deleteProject = async (req, res) => {
    const { id } = req.params;
    const project = await Project.findByIdAndDelete(id)
    res.send(project);
}

module.exports = {
    createProject, getProjects, getProject, updateProject, deleteProject
}