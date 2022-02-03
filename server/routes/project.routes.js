const express = require('express');
const router = express.Router();

const projectController = require('../controller/project.controller');
// const { createProject, getProjects, getProject, updateProject, deleteProject } = require('../controller/project.controller')


// create project (post)
router.post('/create', projectController.createProject)
// router.post('/create-project-issue', projectController.createProjectIssue)

// list all projects
router.get('/', projectController.getProjects)

// list single project
router.get('/:id', projectController.getProject)

// list issues of a single project (/projects/:id/issues)
router.get(`/:id/issues`, projectController.getProjectIssues)

// update projects
router.put('/:id', projectController.updateProject)

// delete project
router.delete('/:id', projectController.deleteProject)

module.exports = router;