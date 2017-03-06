var User = require('../models').User;

function createUser (req, res) {
  var user = User.build({
    username: req.body.username,
    password: req.body.password
  });

  user.save().then(function() {
    res.json(user);
  });
}

module.exports = {
  createUser
};
