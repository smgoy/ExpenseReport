var Expense = require('../models').Expense;

function getExpenses (req, res, next) {
  console.log('here');
  Expense.findAll()
  .then(function(expenses) {
    res.json(expenses);
  })
  .catch(next);
}

function createExpense (req, res) {
  console.log({
    date: req.body.date,
    amount: req.body.amount,
    description: req.body.description,
    userId: req.body.userId
  });

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

module.exports = {
  createExpense,
  getExpenses
};
