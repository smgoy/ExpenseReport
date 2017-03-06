var express = require('express');
var router = express.Router();
var userController = require('../../app/controllers/users');

router.post('/users', userController.createUser);

module.exports = router;
