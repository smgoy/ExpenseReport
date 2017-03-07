import React from 'react';
import { TableRow, TableRowColumn } from 'material-ui/Table';

const ExpenseRow = ({expense}) => (
  <TableRow>
    <TableRowColumn>{expense.date}</TableRowColumn>
    <TableRowColumn>{expense.amount}</TableRowColumn>
    <TableRowColumn>{expense.description}</TableRowColumn>
  </TableRow>
);

export default ExpenseRow;
