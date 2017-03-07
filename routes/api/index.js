var express = require('express');
var router = express.Router();
var protectRoutes = require('../../app/auth/index');
var userRoutes = require('./users');
var loginRoute = require('./login');
var expenseRoutes = require('./expenses');

router.use('/', userRoutes);
router.use('/', loginRoute);
router.use('/', protectRoutes, expenseRoutes);

module.exports = router;
