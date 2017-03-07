import axios from 'axios';

export const login = (userCredentials, success, error) => {
  axios.post('/api/login', userCredentials)
    .then(function(response) {
      success(response.data);
    })
    .catch(function(err) {
      error(err);
    });
};
