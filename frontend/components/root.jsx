import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './app';
import RequireAuth from './auth/authenticate';
import Home from './home/home';
import ExpenseTable from './expenses/expense_table';
import EmployeeExpenseTable from './expenses/employee_expense_table';
import ReportTable from './report/report_table';

const Root = ({store}) => (
  <MuiThemeProvider>
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Home} />
          <Route path="expenses" component={RequireAuth(ExpenseTable)} />
          <Route path="report" component={RequireAuth(ReportTable)} />
          <Route path="employee-expense" component={RequireAuth(EmployeeExpenseTable)} />
        </Route>
      </Router>
    </Provider>
  </MuiThemeProvider>
);

export default Root;
