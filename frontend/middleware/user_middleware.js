import { receiveUser, userConstants } from '../actions/user_actions';
import { requestUser } from '../util/user';

const UserMiddleware = ({dispatch}) => next => action => {
  const successCallback = data => {
    dispatch(receiveUser(data));
  };

  switch (action.type) {
    case userConstants.REQUEST_USER:
      requestUser(action.id, successCallback);
      return next(action);
    default:
      return next(action);
  }
};

export default UserMiddleware;
