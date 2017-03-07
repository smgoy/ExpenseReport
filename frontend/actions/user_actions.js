export const userConstants = {
  RECEIVE_USER: 'RECEIVE_USER'
};

export const receiveUser = user => ({
  type: userConstants.RECEIVE_USER,
  user
});
