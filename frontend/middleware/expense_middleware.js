import { expenseConstants, receiveExpenses } from '../actions/expense_actions';
import { requestExpenses } from '../util/expense';

const ExpenseMiddleware = ({dispatch}) => next => action => {
  const successCallback = expenses => dispatch(receiveExpenses(expenses));
  // const errorCallback = e => {
  //   const errors = e.responseJSON;
  //   dispatch(receiveErrors(errors));
  // };

  switch (action.type) {
    case expenseConstants.REQUEST_EXPENSES:
      requestExpenses(successCallback);
      return next(action);
    default:
      return next(action);
  }
};

export default ExpenseMiddleware;
