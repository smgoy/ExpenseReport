import { receiveUser,
         receiveUsers,
         userConstants } from '../actions/user_actions';
import { requestUser, requestUsers } from '../util/user';

const UserMiddleware = ({dispatch}) => next => action => {
  switch (action.type) {
    case userConstants.REQUEST_USER:
      requestUser(action.id, data => dispatch(receiveUser(data)));
      return next(action);
    case userConstants.REQUEST_USERS:
      requestUsers(users => dispatch(receiveUsers(users)));
      return next(action);
    default:
      return next(action);
  }
};

export default UserMiddleware;
