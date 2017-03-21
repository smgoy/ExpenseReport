import React from 'react';
import { Table, TableBody, TableHeader,
         TableHeaderColumn, TableRow } from 'material-ui/Table';
import ReportRow from './report_row';

class ReportTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentWillMount() {
    if(!this.props.expenses)
      this.props.requestUserExpenses(this.props.userId);
  }

  render() {
    const tableRows = [];
    this.props.expenses.forEach(expense => {
      tableRows.push( <ReportRow key={expense.id} expense={expense} /> );
    });

    return (
      <div className='expense-table-container'>
        <Table>
          <TableHeader adjustForCheckbox={false}
                       displaySelectAll={false}>
            <TableRow>
              <TableHeaderColumn>Week</TableHeaderColumn>
              <TableHeaderColumn>Amount</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            {tableRows}
          </TableBody>
        </Table>
      </div>
    );
  }
}

import { connect } from 'react-redux';
import { requestUserExpenses } from '../../actions/expense_actions';

const mapStateToProps = state => ({
  expenses: state.expenses,
  userId: state.user.id
});

const mapDispatchToProps = dispatch => ({
  requestUserExpenses: userId => dispatch(requestUserExpenses(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ReportTable);
