var express = require('express');
var router = express.Router();
var userRoutes = require('./users');
var loginRoute = require('./login');

router.use('/', userRoutes);
router.use('/', loginRoute);

module.exports = router;
