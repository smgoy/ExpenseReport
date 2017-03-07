import { userConstants } from '../actions/user_actions';

const _nullUser = Object.freeze({
  loggedIn: false
});

const UserReducer = (state = _nullUser, action) => {
  switch (action.type) {
    case userConstants.RECEIVE_USER:
      return {
        username: action.username,
        admin: action.admin,
        loggedIn: true
      };
    default:
      return state;
  }
};

export default UserReducer;
