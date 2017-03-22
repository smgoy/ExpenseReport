var express = require('express');
var router = express.Router();
var userController = require('../../app/controllers/users');
var protectRoutes = require('../../app/auth/index');

router.get('/users', protectRoutes, userController.getUsers);
router.post('/users', userController.createUser);
router.get('/users/:id', userController.getUser);

module.exports = router;
