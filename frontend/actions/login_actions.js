export const loginConstants = {
  LOGIN: 'LOGIN'
};

export const login = userCredentials => ({
  type: loginConstants.LOGIN,
  userCredentials
});
