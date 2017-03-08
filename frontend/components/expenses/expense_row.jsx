import React from 'react';
import { TableRow, TableRowColumn } from 'material-ui/Table';
import IconButton from 'material-ui/IconButton';
import numeral from 'numeral';
import moment from 'moment';

class ExpenseRow extends React.Component {
  handleEdit(expenseId) {
    debugger;
  }

  handleDelete(expenseId) {
    this.props.deleteExpense(expenseId);
  }

  render() {
    const expense = this.props.expense;

    return (
      <TableRow>
        <TableRowColumn>{moment(expense.date).format('MMMM Do YYYY')}</TableRowColumn>
        <TableRowColumn>{'$' + numeral(expense.amount).format('0,0.00').toString()}</TableRowColumn>
        <TableRowColumn>{expense.description}</TableRowColumn>
        <TableRowColumn>
          <a onClick={this.handleEdit.bind(this, expense.id)}>Edit</a> | <a onClick={this.handleDelete.bind(this, expense.id)}>Delete</a>
        </TableRowColumn>
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
