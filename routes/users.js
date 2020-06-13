
var express = require('express');
var router = express.Router();
var UsersController = require('../controllers/UsersController');

// get all users
router.get('/', UsersController.index);

// get one user
router.get('/:id', UsersController.findUser);

// create user
router.post('/', UsersController.createUser);

// update user
router.put('/:id', UsersController.updateUser);

//delete user
router.delete('/:id', UsersController.deleteUser);

module.exports = router;
