import { expenseConstants,
         receiveExpenses,
         receiveExpense } from '../actions/expense_actions';
import { requestExpenses, createExpense } from '../util/expense';
import { receiveErrors } from '../actions/error_actions';

const ExpenseMiddleware = ({dispatch}) => next => action => {
  let successCallback;
  const errorCallback = error => dispatch(receiveErrors(error));

  switch (action.type) {
    case expenseConstants.REQUEST_EXPENSES:
      successCallback = expenses => dispatch(receiveExpenses(expenses));
      requestExpenses(successCallback);
      return next(action);
    case expenseConstants.CREATE_EXPENSE:
      successCallback = expense => {
        dispatch(receiveExpense(expense));
        action.toggleForm();
      };
      createExpense(action.expense, successCallback, errorCallback);
      return next(action);
    default:
      return next(action);
  }
};

export default ExpenseMiddleware;
