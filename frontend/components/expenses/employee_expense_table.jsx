import React from 'react';
import { Table, TableBody, TableHeader,
         TableHeaderColumn, TableRow } from 'material-ui/Table';
import ChooseEmployee from './choose_employee';

class EmployeeExpenseTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chooseEmployeeOpen: true,
      employeeName: ''
    };
  }

  componenetWillMount() {
    this.props.requestUsers();
  }

  fetchEmployeeExpenses(employee) {
    this.props.requestUserExpense(employee.id);
    this.setState({
      chooseEmployeeOpen: false,
      employeeName: employee.name
    });
  }

  render() {
    return(
      <div className='expense-table-container'>
        <h1>{this.state.employeeName + "'s Expenses:'"}</h1>
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
import { requestUsers, requestUserExpenses } from '../../actions/user_actions';

const mapStateToProps = state => ({
  expenses: state.expenses,
  users: state.users
});

const mapDispatchToProps = dispatch => ({
  requestUsers: () => dispatch(requestUsers()),
  requestUserExpenses: userId => dispatch(requestUserExpenses(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeExpenseTable);
