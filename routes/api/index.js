var express = require('express');
var router = express.Router();
var protectRoute = require('../../app/auth/index');
var userRoutes = require('./users');
var loginRoute = require('./login');
var expenseRoutes = require('./expenses');

router.use('/', userRoutes);
router.use('/', loginRoute);
router.use('/', protectRoute, expenseRoutes);

module.exports = router;
