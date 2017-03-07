import { applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import LoginMiddleware from './login_middleware';
const loggerMiddleware = createLogger();

const MasterMiddleware = applyMiddleware(
  loggerMiddleware,
  LoginMiddleware
);

export default MasterMiddleware;
