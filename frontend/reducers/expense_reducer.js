import { expenseConstants } from '../actions/expense_actions';

const findIndex = (expenses, expenseId) => {
  for (let i = 0; i < expenses.length; i++) {
    if (expenses[i].id === parseInt(expenseId, 10)) return i;
  }
};

const insertExpenseIndex = (expenses, expense) => {

  const middleIdx = Math.floor(expenses.length / 2);

  if (middleIdx === 0) {
    return middleIdx;
  } else if(expenses[middleIdx + 1] === undefined &&
      new Date(expense.date) > new Date(expenses[middleIdx].date)) {
    return middleIdx + 1;
  }

  if (new Date(expense.date) > new Date(expenses[middleIdx].date)
        && new Date(expense.date) < new Date(expenses[middleIdx + 1].date)) {
    return middleIdx + 1;
  } else if (new Date(expense.date) < new Date(expenses[middleIdx].date)
        && new Date(expense.date) > new Date(expenses[middleIdx - 1].date)) {
    return middleIdx;
  }

  let idx;
  if (new Date(expense.date) < new Date(expenses[middleIdx].date)) {
    idx = insertExpenseIndex(expenses.slice(0, middleIdx), expense);
  } else {
    idx = middleIdx + 1 + insertExpenseIndex(expenses.slice(middleIdx + 1, expenses.length), expense);
  }

  return idx;

};

const ExpenseReducer = (state = [], action) => {
  let newState;

  switch (action.type) {
    case expenseConstants.RECEIVE_EXPENSES:
      return action.expenses.sort((a, b) => (
        new Date(a.date) - new Date(b.date)
      ));
    case expenseConstants.RECEIVE_EXPENSE:
      const expenseIdx = insertExpenseIndex(state, action.expense, 0);
      newState = state.slice();
      newState.splice(expenseIdx, 0, action.expense);
      return newState;
    case expenseConstants.UPDATE_EXPENSES:
      const indexToEdit = findIndex(state, action.expense.id);
      newState = state.slice();
      newState[indexToEdit] = action.expense;
      return newState;
    case expenseConstants.REMOVE_EXPENSE:
      const indexToRemove = findIndex(state, action.expenseId);
      return state.slice(0, indexToRemove).concat(state.slice(indexToRemove + 1, state.length));
    default:
      return state;
  }
};

export default ExpenseReducer;
