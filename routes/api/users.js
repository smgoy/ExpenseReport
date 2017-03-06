var express = require('express');
var router = express.Router();
var userController = require('../../app/controllers/users');

router.post('/users', userController.createUser);

var User = require('../../app/models').User;
var authenticate = require('../../app/auth/index');

router.get('/users', authenticate, function(req, res, next) {

  User.findAll({})
  .then(function(users) {
    res.json(users);
  })
  .catch(next);

});

module.exports = router;
