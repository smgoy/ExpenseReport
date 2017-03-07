import { applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import LoginMiddleware from './login_middleware';
import UserMiddleware from './user_middleware';
import ExpenseMiddleware from './expense_middleware';
const loggerMiddleware = createLogger();

const MasterMiddleware = applyMiddleware(
  loggerMiddleware,
  LoginMiddleware,
  UserMiddleware,
  ExpenseMiddleware
);

export default MasterMiddleware;
