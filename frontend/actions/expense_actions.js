export const expenseConstants = {
  RECEIVE_EXPENSES: 'RECEIVE_EXPENSES',
  REQUEST_EXPENSES: 'REQUEST_EXPENSES',
  CREATE_EXPENSE: 'CREATE_EXPENSE',
  RECEIVE_EXPENSE: 'RECEIVE_EXPRENSE'
};

export const receiveExpenses = expenses => ({
  type: expenseConstants.RECEIVE_EXPENSES,
  expenses
});

export const requestExpenses = () => ({
  type: expenseConstants.REQUEST_EXPENSES
});

export const createExpense = (expense, toggleForm)=> ({
  type: expenseConstants.CREATE_EXPENSE,
  expense,
  toggleForm
});

export const receiveExpense = expense => ({
  type: expenseConstants.RECEIVE_EXPENSE,
  expense
});
