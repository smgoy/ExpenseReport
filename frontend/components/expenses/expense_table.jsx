import React from 'react';
import { Table, TableBody, TableHeader,
         TableHeaderColumn, TableRow } from 'material-ui/Table';
import ExpenseRow from './expense_row';

class ExpenseTable extends React.Component {
  componentWillMount() {
    this.props.requestExpenses();
  }

  render () {
    const tableRows = [];
    this.props.expenses.forEach(expense => {
      tableRows.push(<ExpenseRow key={expense.id} expense={expense} />);
    });


    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>Date</TableHeaderColumn>
            <TableHeaderColumn>Amount</TableHeaderColumn>
            <TableHeaderColumn>Description</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tableRows}
        </TableBody>
      </Table>
    );
  }
}

import { connect } from 'react-redux';
import { requestExpenses } from '../../actions/expense_actions';

const mapStateToProps = state => ({
  expenses: state.expenses
});

const mapDispatchToProps = dispatch => ({
  requestExpenses: () => dispatch(requestExpenses())
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseTable);
