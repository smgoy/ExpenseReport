import { expenseConstants } from '../actions/expense_actions';

const findIndex = (expenses, expenseId) => {
  for (let i = 0; i < expenses.length; i++) {
    if (expenses[i].id === parseInt(expenseId)) return i;
  }
};

const ExpenseReducer = (state = [], action) => {
  switch (action.type) {
    case expenseConstants.RECEIVE_EXPENSES:
      return action.expenses;
    case expenseConstants.RECEIVE_EXPENSE:
      return state.concat(action.expense);
    case expenseConstants.UPDATE_EXPENSES:
      const indexToEdit = findIndex(state, action.expense.id);
      const newState = state.slice();
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
