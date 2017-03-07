var express = require('express');
var router = express.Router();
var userController = require('../../app/controllers/users');

router.post('/users', userController.createUser);
router.get('/users/:id', userController.getUser);

module.exports = router;
