import axios from 'axios';

export const requestUser = (userId, success) => {
  axios.get(`/api/users/${userId}`)
    .then(function(response) {
      success(response.data);
    });
};
