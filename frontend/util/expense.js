import axios from 'axios';

const setAuthheader = () => {
  const token = localStorage.getItem('token');
  const instance = axios.create({
    headers: {'Authorization': token}
  });
  return instance;
};


export const requestExpenses = (success) => {
  const instance = setAuthheader();
  instance.get('/api/expenses')
    .then(function(response) {
      success(response.data);
    });
};

export const requestUserExpenses = (userId, success) => {
  const instance = setAuthheader();
  instance.get(`/api/expenses/${userId}`)
    .then(function(response) {
      success(response.data);
    });
};

export const createExpense = (expense, success, error) => {
  const instance = setAuthheader();
  instance.post('/api/expenses', expense)
    .then(function(response) {
      success(response.data);
    })
    .catch(function(err) {
      error(err);
    });
};

export const editExpense = (expense, success, error) => {
  const instance = setAuthheader();
  instance.patch(`/api/expenses/${expense.expenseId}`, expense)
    .then(function(response) {
      success(response.data);
    })
    .catch(function(err) {
      error(err);
    });
};

export const deleteExpense = (expenseId, success) => {
  const instance = setAuthheader();
  instance.delete(`/api/expenses/${expenseId}`)
    .then(function(response) {
      success(response.data);
    });
};
