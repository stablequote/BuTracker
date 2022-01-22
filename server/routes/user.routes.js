const express = require('express');
const router = express.Router();
const userController = require('../controller/user.controller');

// create user (post)
router.post('/create', userController.createUser)

// list all users
router.get('/', userController.getUser)

// list single user
router.get('/:id', userController.getUser)

// update issues
router.put('/:id', userController.updateUser)

// delete user
router.delete('/:id', userController.deleteUser)

module.exports = router;