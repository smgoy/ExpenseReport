export const expenseConstants = {
  RECEIVE_EXPENSES: 'RECEIVE_EXPENSES',
  REQUEST_EXPENSES: 'REQUEST_EXPENSES',
  CREATE_EXPENSE: 'CREATE_EXPENSE',
  RECEIVE_EXPENSE: 'RECEIVE_EXPRENSE',
  EDIT_EXPENSE: 'EDIT_EXPENSE',
  UPDATE_EXPENSES: 'UPDATE_EXPENSES',
  DELETE_EXPENSE: 'DELETE_EXPENSE',
  REMOVE_EXPENSE: 'REMOVE_EXPENSE'
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

export const editExpense = expense => ({
  type: expenseConstants.EDIT_EXPENSE,
  expense
});

export const updateExpenses = expense => ({
  type: expenseConstants.UPDATE_EXPENSES,
  expense
});

export const deleteExpense = expenseId => ({
  type: expenseConstants.DELETE_EXPENSE,
  expenseId
});

export const removeExpense = expenseId => ({
  type: expenseConstants.REMOVE_EXPENSE,
  expenseId
});
