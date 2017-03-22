export const userConstants = {
  RECEIVE_USER: 'RECEIVE_USER',
  REQUEST_USER: 'REQUEST_USER',
  REQUEST_USERS: 'REQUEST_USERS',
  RECEIVE_USERS: 'RECEIVE_USERS'
};

export const receiveUser = user => ({
  type: userConstants.RECEIVE_USER,
  user
});

export const requestUser = id => ({
  type: userConstants.REQUEST_USER,
  id
});

export const requestUsers = () => ({
  type: userConstants.REQUEST_USERS
});

export const receiveUsers = users => ({
  type: userConstants.RECEIVE_USERS,
  users
});
