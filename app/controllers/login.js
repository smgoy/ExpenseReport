var User = require('../models').User;
var jwt = require('jwt-simple');
var config = require('../auth/config');

module.exports = function (req, res, next) {
    var username = req.body.username;
    var password = req.body.password;
    User.findOne({ where: {username: username} })
    .then(function(user) {
      if (!user) res.sendStatus(401);

      if (user.verifyPassword(password)) {
        var payload = {
            id: user.id
        };
        var token = jwt.encode(payload, config.jwtSecret);
        res.json({
            token: 'JWT ' + token,
            user: {
              username: user.username,
              admin: user.admin
            }
        });
      } else {
        res.sendStatus(401);
      }
    })
    .catch(next);
};
