import axios from 'axios';

const setAuthheader = () => {
  const token = localStorage.getItem('token');
  const instance = axios.create({
    headers: {'Authorization': token}
  });
  return instance;
};

export const requestUser = (userId, success) => {
  axios.get(`/api/users/${userId}`)
    .then(function(response) {
      success(response.data);
    });
};

export const requestUsers = (success) => {
  const instance = setAuthheader();
  instance.get('/api/users')
    .then(function(response) {
      success(response.data);
    });
};
