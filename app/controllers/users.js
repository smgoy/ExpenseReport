var User = require('../models').User;

function createUser (req, res) {
  var user = User.build({
    username: req.body.username,
    password: req.body.password
  });

  user.save()
  .then(function() {
    res.json(user);
  })
  .catch(function(error) {
    res.status(422);
    res.json(error);
  });
}

function getUser (req, res, next) {
  User.findById(req.params.id)
  .then(function(user) {
    res.json({
      username: user.dataValues.username,
      admin: user.dataValues.admin
    });
  })
  .catch(next);
}

module.exports = {
  createUser,
  getUser
};
