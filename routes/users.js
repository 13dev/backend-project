
var express = require('express');
var router = express.Router();
var UsersController = require('../controllers/UsersController');

// get all malwares
router.get('/', UsersController.index);

// get one malware
router.get('/:id', UsersController.findUser);

// create malware
//TODO: router.post('/', MalwareController.create);

// update malware
//TODO: router.put('/', MalwareController.create);

//delete malware
//TODO: router.delete('/', MalwareController.create);

module.exports = router;
