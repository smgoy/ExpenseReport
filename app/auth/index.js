var passport = require("passport");
var passportJWT = require("passport-jwt");
var User = require('../models').User;
var config = require("./config.js");
var ExtractJwt = passportJWT.ExtractJwt;
var Strategy = passportJWT.Strategy;
var params = {
    secretOrKey: config.jwtSecret,
    jwtFromRequest: ExtractJwt.fromAuthHeader()
};

var strategy = new Strategy(params, function(payload, done) {
  User.findById(payload.id)
  .then(function(user) {
    if (user) {
      return done(null, user);
    } else {
      return done(null, false);
    }
  })
  .catch(function(err) {
    if (err) return done(err);
  });
});

passport.use(strategy);

module.exports = passport.authenticate("jwt", config.jwtSession);
