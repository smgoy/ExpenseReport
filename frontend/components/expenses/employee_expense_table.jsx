import React from 'react';
import { Table, TableBody, TableHeader,
         TableHeaderColumn, TableRow } from 'material-ui/Table';
import ChooseEmployee from './choose_employee';
import ExpenseRow from './expense_row';
import RaisedButton from 'material-ui/RaisedButton';

class EmployeeExpenseTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chooseEmployeeOpen: true,
      employeeName: ''
    };
  }

  componentWillMount() {
    this.props.requestUsers();
  }

  fetchEmployeeExpenses(employee) {
    this.props.requestUserExpenses(employee.id);
    this.setState({
      chooseEmployeeOpen: false,
      employeeName: employee.username
    });
  }

  openChooseEmployee(e) {
    e.preventDefault();
    this.setState({
      chooseEmployeeOpen: true,
      employeeName: ''
    });
  }

  render() {
    const tableRows = [];
    this.props.expenses.forEach(expense => {
      tableRows.push(
        <ExpenseRow
          {...this.props}
          key={expense.id}
          expense={expense} />
      );
    });

    return(
      <div className='expense-table-container'>
        <div className='choose-employee'>
          <h1>{this.state.chooseEmployeeOpen ? undefined : 'View ' + this.state.employeeName + ' Expenses:'}</h1>
          <RaisedButton label="Change Employee" onClick={this.openChooseEmployee.bind(this)} />
        </div>
        <Table>
          <TableHeader adjustForCheckbox={false}
                       displaySelectAll={false}>
            <TableRow>
              <TableHeaderColumn>Date</TableHeaderColumn>
              <TableHeaderColumn>Amount</TableHeaderColumn>
              <TableHeaderColumn>Description</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            {this.state.chooseEmployeeOpen ? undefined : tableRows}
          </TableBody>
        </Table>
        <ChooseEmployee
          open={this.state.chooseEmployeeOpen}
          employees={this.props.users}
          fetchEmployeeExpenses={this.fetchEmployeeExpenses.bind(this)} />
      </div>
    );
  }
}

import { connect } from 'react-redux';
import { requestUsers } from '../../actions/user_actions';
import { requestUserExpenses } from '../../actions/expense_actions';

const mapStateToProps = state => ({
  expenses: state.expenses,
  users: state.users
});

const mapDispatchToProps = dispatch => ({
  requestUsers: () => dispatch(requestUsers()),
  requestUserExpenses: userId => dispatch(requestUserExpenses(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeExpenseTable);
