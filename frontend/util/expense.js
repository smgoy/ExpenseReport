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

export const createExpense = (expense, success, error) => {
  instance.post(`/api/expenses`, expense)
    .then(function(response) {
      success(response.data);
    })
    .catch(function(err) {
      error(err);
    });
};
