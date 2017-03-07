import axios from 'axios';

const token = localStorage.getItem('token');

const instance = axios.create({
  headers: {'Authorization': token}
});

export const requestExpenses = (success) => {
  instance.get(`/api/expenses`)
    .then(function(response) {
      success(response.data);
    });
};
