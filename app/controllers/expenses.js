var Expense = require('../models').Expense;

function getExpenses(req, res, next) {
  Expense.findAll()
  .then(function(expenses) {
    res.json(expenses);
  })
  .catch(next);
}

function createExpense(req, res) {
  var expense = Expense.build({
    date: req.body.date,
    amount: req.body.amount,
    description: req.body.description,
    userId: req.body.userId
  });

  expense.save()
  .then(function() {
    res.json([expense]);
  })
  .catch(function(error) {
    res.status(422);
    res.json(error);
  });

}

function editExpense(req, res, next) {
  Expense.findById(req.params.id)
  .then(function(expense) {
    expense.update({
      date: req.body.date,
      amount: req.body.amount,
      description: req.body.description
    })
    .then(function(updatedExpense) {
      res.json(updatedExpense);
    })
    .catch(function(error) {
      res.status(422);
      res.json(error);
    });
  })
  .catch(next);
}

function deleteExpense(req, res) {
  var expenseToDestroy = req.params.id;
  Expense.findById(expenseToDestroy)
  .then(function(expense) {
    expense.destroy();
  })
  .then(function() {
    res.json(expenseToDestroy);
  });
}

module.exports = {
  createExpense,
  getExpenses,
  editExpense,
  deleteExpense
};
