import { userConstants } from '../actions/user_actions';
import { loginConstants } from '../actions/login_actions';

const _nullUser = Object.freeze({
  loggedIn: false
});

export const UserReducer = (state = _nullUser, action) => {
  switch (action.type) {
    case userConstants.RECEIVE_USER:
      return {
        username: action.user.username,
        admin: action.user.admin,
        loggedIn: true,
        id: action.user.id
      };
    case loginConstants.LOGOUT:
      return _nullUser;
    default:
      return state;
  }
};

export const UsersReducer = (state = [], action) => {
  switch (action.type) {
    case userConstants.RECEIVE_USERS:
      return action.users;
    default:
      return state;
    }
};
