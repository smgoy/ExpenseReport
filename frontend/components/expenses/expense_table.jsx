import React from 'react';
import { Table, TableBody, TableHeader,
         TableHeaderColumn, TableRow } from 'material-ui/Table';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
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
      <div className='expense-table-container'>
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
            {tableRows}
          </TableBody>
        </Table>
        <div className='add-expense'>
          <p className='add-expense-text'>Add an Expense</p>
          <FloatingActionButton>
            <ContentAdd />
          </FloatingActionButton>
        </div>
      </div>
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
