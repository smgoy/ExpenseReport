export const expenseConstants = {
  RECEIVE_EXPENSES: 'RECEIVE_EXPENSES',
  REQUEST_EXPENSES: 'REQUEST_EXPENSES'
};

export const receiveExpenses = expenses => ({
  type: expenseConstants.RECEIVE_EXPENSES,
  expenses
});

export const requestExpenses = () => ({
  type: expenseConstants.REQUEST_EXPENSES
});
