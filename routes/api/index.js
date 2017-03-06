var express = require('express');
var router = express.Router();
var userRoutes = require('./users');

router.use('/', userRoutes);

module.exports = router;
