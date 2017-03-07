var Expense = require('../models').Expense;

function createExpense (req, res) {
  var expense = Expense.build({
    date: req.body.date,
    amount: req.body.amount,
    description: req.body.description
  });

  expense.save()
  .then(function() {
    res.json(expense);
  })
  .catch(function(error) {
    res.status(422);
    res.json(error);
  });

}

module.exports = {
  createExpense
};
