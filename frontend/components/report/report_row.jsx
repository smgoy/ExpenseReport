import React from 'react';
import { TableRow, TableRowColumn } from 'material-ui/Table';
import numeral from 'numeral';

const ReportRow = ({week, amount}) => {
  return(
    <TableRow>
      <TableRowColumn>{week.format('MMMM Do YYYY')}</TableRowColumn>
      <TableRowColumn>{'$' + numeral(amount).format('0,0.00').toString()}</TableRowColumn>
    </TableRow>
  );
};

export default ReportRow;
