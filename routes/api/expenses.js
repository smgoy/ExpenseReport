var express = require('express');
var router = express.Router();
var expenseController = require('../../app/controllers/expenses');

router.get('/expenses', expenseController.getExpenses);
router.get('/expenses/:userId', expenseController.getUserExpenses);
router.post('/expenses', expenseController.createExpense);
router.patch('/expenses/:id', expenseController.editExpense);
router.delete('/expenses/:id', expenseController.deleteExpense);

module.exports = router;
