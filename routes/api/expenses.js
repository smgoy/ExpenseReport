var express = require('express');
var router = express.Router();
var expenseController = require('../../app/controllers/expenses');

router.get('/expenses', expenseController.getExpenses);
router.post('/expenses', expenseController.createExpense);
router.delete('/expenses/:id', expenseController.deleteExpense);

module.exports = router;
