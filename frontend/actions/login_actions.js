export const loginConstants = {
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT'
};

export const login = userCredentials => ({
  type: loginConstants.LOGIN,
  userCredentials
});

export const logout = () => ({
  type: loginConstants.LOGOUT
});
