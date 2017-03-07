import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './app';
import RequireAuth from './auth/authenticate';
import LoginForm from './login/login';
import ExpenseTable from './expenses/expense_table';

const Root = ({store}) => (
  <MuiThemeProvider>
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={LoginForm} />
          <Route path="expenses" component={RequireAuth(ExpenseTable)} />
        </Route>
      </Router>
    </Provider>
  </MuiThemeProvider>
);

export default Root;
