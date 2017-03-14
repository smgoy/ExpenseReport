var Expense = require('../models').Expense;
var User = require('../models').User;
var jwt = require('jwt-simple');
var config = require('../auth/config');

function getExpenses(req, res, next) {
  if (req.body.admin) {
    Expense.findAll()
    .then(function(expenses) {
      res.json(expenses);
    })
    .catch(next);
  } else {
    res.json('You are not an administrative user');
  }
}

function getUserExpenses(req, res, next) {
  // var token = res.AuthHeader; how to get authheader
  // var userId = jwt.decode(token, config.jwtSecret);
  User.findById(req.body.userId)
  .then(function(user) {
    user.getExpenses()
    .then(function(userExpenses) {
      res.json(userExpenses);
    });
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
  getUserExpenses,
  editExpense,
  deleteExpense
};
