import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './app';
import RequireAuth from './auth/authenticate';
import Home from './home/home';
import TableContent from './tabel/tabel';

const Root = ({store}) => (
  <MuiThemeProvider>
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Home} />
          <Route path="expenses" component={RequireAuth(TableContent, {expenseFormOpen: false, chooseEmployeeOpen: false})} />
          <Route path="report" component={RequireAuth(TableContent, {expenseFormOpen: false, chooseEmployeeOpen: false})} />
          <Route path="employee-expense" component={RequireAuth(TableContent, {expenseFormOpen: false, chooseEmployeeOpen: true})} />
        </Route>
      </Router>
    </Provider>
  </MuiThemeProvider>
);

export default Root;
