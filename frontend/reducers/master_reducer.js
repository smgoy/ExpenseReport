import { combineReducers } from 'redux';
import { UserReducer, UsersReducer } from './user_reducer';
import ExpenseReducer from './expense_reducer';

const MasterReducer = combineReducers({
  user: UserReducer,
  expenses: ExpenseReducer,
  users: UsersReducer
});

export default MasterReducer;
