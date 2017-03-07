var express = require('express');
var router = express.Router();
var expenseController = require('../controllers/expenses');

router.post('/expenses', expenseController.createExpense);

module.exports = router;
