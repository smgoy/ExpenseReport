import axios from 'axios';

const token = localStorage.getItem('token');

const instance = axios.create({
  headers: {'Authorization': token}
});

export const requestExpenses = (success) => {
  instance.get('/api/expenses')
    .then(function(response) {
      success(response.data);
    });
};

export const createExpense = (expense, success, error) => {
  instance.post('/api/expenses', expense)
    .then(function(response) {
      success(response.data);
    })
    .catch(function(err) {
      error(err);
    });
};

export const editExpense = (expense, success, error) => {
  instance.patch(`/api/expenses/${expense.expenseId}`, expense)
    .then(function(response) {
      success(response.data);
    })
    .catch(function(err) {
      error(err);
    });
};

export const deleteExpense = (expenseId, success) => {
  instance.delete(`/api/expenses/${expenseId}`)
    .then(function(response) {
      success(response.data);
    });
};
