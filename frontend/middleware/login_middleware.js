import { loginConstants } from '../actions/login_actions';
import { receiveErrors } from '../actions/error_actions';
import { receiveUser } from '../actions/user_actions';
import { login } from '../util/login';

const LoginMiddleware = ({dispatch}) => next => action => {
  const successCallback = data => {
    dispatch(receiveUser(data.user));
    localStorage.setItem('token', data.token);
  };
  const errorCallback = e => {
    const errors = e.responseJSON;
    dispatch(receiveErrors(errors));
  };

  switch (action.type) {
    case loginConstants.LOGIN:
      login(action.userCredentials, successCallback, errorCallback);
      return next(action);
    default:
      return next(action);
  }
};

export default LoginMiddleware;
