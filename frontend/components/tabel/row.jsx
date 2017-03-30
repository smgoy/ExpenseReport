import React from 'react';
import { TableRow, TableRowColumn } from 'material-ui/Table';
import numeral from 'numeral';
import moment from 'moment';

const Row = ({ row, pathname, toggleEventForm, deleteExpense }) => {

  const renderRowColumns = () => {
    const rowColumns = [];
    Object.keys(row).forEach( col => {
      if (col === 'date') {
        rowColumns.push(
          <TableRowColumn>
            {moment(row.date).format('MMMM Do YYYY')}
          </TableRowColumn>
        );
      } else if (col === 'amount') {
        rowColumns.push(
          <TableRowColumn>
            {'$' + numeral(row.amount).format('0,0.00').toString()}
          </TableRowColumn>
        );
      } else if (col === 'description') {
        rowColumns.push(
          <TableRowColumn>{row.description}</TableRowColumn>
        );
      }
    });
  };

  const handleDelete = (expenseId) => {
    deleteExpense(expenseId);
  };

  const renderEditDelete = () => {
    if (pathname === 'expenses') {
      return (
        <TableRowColumn>
          <a onClick={toggleEventForm}>Edit</a> | <a onClick={handleDelete.bind(row.id)}>Delete</a>
        </TableRowColumn>
      );
    }
  };

  return (
    <TableRow>
      {renderRowColumns()}
      {renderEditDelete()}
    </TableRow>
  );

};

import { connect } from 'react-redux';
import { deleteExpense } from '../../actions/expense_actions';

const mapDispatchToProps = dispatch => ({
  deleteExpense: expenseId => dispatch(deleteExpense(expenseId))
});

export default connect(null, mapDispatchToProps)(Row);
