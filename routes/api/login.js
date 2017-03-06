var express = require('express');
var router = express.Router();
var authenticateSession = require('../../app/controllers/login');

router.post('/login', authenticateSession);

module.exports = router;
