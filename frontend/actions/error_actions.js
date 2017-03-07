export const errorConstants = {
  RECEIVE_ERRORS: 'RECEIVE_ERRORS'
};

export const receiveErrors = error => ({
  type: errorConstants.RECEIVE_ERRORS,
  error
});
