import React from 'react';
import { Table, TableBody, TableHeader,
         TableHeaderColumn, TableRow } from 'material-ui/Table';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ExpenseRow from './expense_row';
import ExpenseForm from './expense_form';

class ExpenseTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expenseFormOpen: false,
      formType: '',
      expenseToEdit: null
    };
  }

  componentWillMount() {
    if(!this.props.expenses)
      this.props.requestUserExpenses(this.props.userId);
  }

  toggleEventForm(type, expense) {
    const status = !this.state.expenseFormOpen;
    if (type === 'edit') {
      this.setState({
        expenseFormOpen: status,
        formType: 'edit',
        expenseToEdit: expense
      });
    }
    else if (type === 'new') {
      this.setState({
        expenseFormOpen: status,
        formType: 'new',
        expenseToEdit: null
      });
    }
    else {
      this.setState({expenseFormOpen: status});
    }
  }

  render () {
    const tableRows = [];
    this.props.expenses.forEach(expense => {
      tableRows.push(
        <ExpenseRow
          key={expense.id}
          expense={expense}
          toggleEventForm={this.toggleEventForm.bind(this, 'edit', expense)} />
      );
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
              <TableHeaderColumn>Edit | Delete</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            {tableRows}
          </TableBody>
        </Table>
        <div className='add-expense'>
          <p className='add-expense-text'>Add an Expense</p>
          <FloatingActionButton onClick={this.toggleEventForm.bind(this, 'new')}>
            <ContentAdd />
          </FloatingActionButton>
        </div>
        <ExpenseForm
          open={this.state.expenseFormOpen}
          toggleEventForm={this.toggleEventForm.bind(this)}
          formType={this.state.formType}
          expenseToEdit={this.state.expenseToEdit} />
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

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseTable);
