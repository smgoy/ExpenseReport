import { combineReducers } from 'redux';
import UserReducer from './user_reducer';
import ExpenseReducer from './expense_reducer';

const MasterReducer = combineReducers({
  user: UserReducer,
  expenses: ExpenseReducer
});

export default MasterReducer;
