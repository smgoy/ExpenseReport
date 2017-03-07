var express = require('express');
var router = express.Router();
var expenseController = require('../../app/controllers/expenses');

router.get('/expenses', expenseController.getExpenses);
router.post('/expenses', expenseController.createExpense);

module.exports = router;
