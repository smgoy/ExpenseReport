export const userConstants = {
  RECEIVE_USER: 'RECEIVE_USER',
  REQUEST_USER: 'REQUEST_USER'
};

export const receiveUser = user => ({
  type: userConstants.RECEIVE_USER,
  user
});

export const requestUser = id => ({
  type: userConstants.REQUEST_USER,
  id
});
