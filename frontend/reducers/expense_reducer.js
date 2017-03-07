import { expenseConstants } from '../actions/expense_actions';

const ExpenseReducer = (state = [], action) => {
  switch (action.type) {
    case expenseConstants.RECEIVE_EXPENSES:
      return action.expenses;
    default:
      return state;
  }
};

export default ExpenseReducer;
