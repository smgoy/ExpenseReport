import React from 'react';
import { TableRow, TableRowColumn } from 'material-ui/Table';
import IconButton from 'material-ui/IconButton';
import numeral from 'numeral';
import moment from 'moment';

class ExpenseRow extends React.Component {
  handleDelete(expenseId) {
    this.props.deleteExpense(expenseId);
  }

  displayEditDelete() {
    if (this.props.location.pathname === '/employee-expense') {
      return undefined;
    } else if (this.props.location.pathname === '/expenses') {
      return (
        <TableRowColumn>
          <a onClick={this.props.toggleEventForm}>Edit</a> | <a onClick={this.handleDelete.bind(this, this.props.expense.id)}>Delete</a>
        </TableRowColumn>
      );
    }
  }

  render() {
    const expense = this.props.expense;

    return (
      <TableRow>
        <TableRowColumn>{moment(expense.date).format('MMMM Do YYYY')}</TableRowColumn>
        <TableRowColumn>{'$' + numeral(expense.amount).format('0,0.00').toString()}</TableRowColumn>
        <TableRowColumn>{expense.description}</TableRowColumn>
        {this.displayEditDelete()}
      </TableRow>
    );
  }
}

import { connect } from 'react-redux';
import { deleteExpense } from '../../actions/expense_actions';

// const mapStateToProps = state => ({
//   user: state.user
// });

const mapDispatchToProps = dispatch => ({
  deleteExpense: expenseId => dispatch(deleteExpense(expenseId))
});

export default connect(null, mapDispatchToProps)(ExpenseRow);
