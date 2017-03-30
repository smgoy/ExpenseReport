import React from 'react';
import { Table, TableBody, TableHeader,
         TableHeaderColumn, TableRow } from 'material-ui/Table';
import NewExpenseButton from '../expenses/new_expense_button';
import ExpenseForm from '../expenses/expense_form';
import ChooseEmployee from '../expenses/choose_employee';
import Row from './row';
import RaisedButton from 'material-ui/RaisedButton';

class TabelContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expenseToEdit: null,
      expenseFormOpen: props.config.expenseFormOpen,
      chooseEmployeeOpen: props.config.chooseEmployeeOpen,
      tableType: this.cleanPathName(props.location.pathname),
      formType: '',
      employeeUsername: ''
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState(
      { tableType: this.cleanPathName(nextProps.location.pathname) }
    );
  }

  componentWillMount() {
    this.props.requestUserExpenses(this.props.userId);
    this.props.requestUsers();
  }

  cleanPathName(pathname) {
    if (pathname[0] === '/') {
      return pathname.substr(1);
    } else {
      return pathname;
    }
  }

  toggleEventForm(type, expense) {
    const status = !this.state.expenseFormOpen;
    if (type === 'edit') {
      this.setState({
        expenseFormOpen: status,
        formType: 'Edit Event',
        expenseToEdit: expense
      });
    }
    else if (type === 'new') {
      this.setState({
        expenseFormOpen: status,
        formType: 'New Event',
        expenseToEdit: null
      });
    }
    else {
      this.setState({expenseFormOpen: status});
    }
  }

  renderColNames() {
    let colNames;
    const { tableType } = this.state;

    if (tableType === 'expenses') {
        colNames = ['Date', 'Amount', 'Description', 'Edit | Delete'];
    } else if (tableType === 'employee-expense') {
        colNames = ['Date', 'Amount', 'Description'];
    } else if (tableType === 'report') {
        colNames = ['Week of', 'Amount'];
    }

    colNames = colNames.map( name => (
      <TableHeaderColumn key={name}>{name}</TableHeaderColumn>
    ));

    return colNames;
  }

  renderNewExpenseButton() {
    const { tableType } = this.state;
    if (tableType === 'expenses') {
      return (
        <NewExpenseButton
          toggleEventForm={this.toggleEventForm.bind(this, 'new')} />
      );
    } else {
      return null;
    }
  }

  renderRows() {
    const tableRows = [];
    this.props.expenses.forEach(expense => {
      tableRows.push(
        <Row
          key={expense.id}
          row={expense}
          toggleEventForm={this.toggleEventForm.bind(this, 'edit', expense)}
          pathname={this.state.tableType} />
      );
    });

    return tableRows;
  }

  renderChooseEmployee() {
    if (this.state.tableType === 'employee-expense') {
      return (
        <div className='choose-employee'>
          <h1>{this.state.chooseEmployeeOpen ? undefined : 'View ' + this.state.employeeUsername + ' Expenses:'}</h1>
          <RaisedButton label="Change Employee" onClick={this.openChooseEmployee.bind(this)} />
        </div>
      );
    }
  }

  openChooseEmployee(e) {
    e.preventDefault();
    this.setState({
      chooseEmployeeOpen: true,
      employeeName: ''
    });
  }

  fetchEmployeeExpenses(employee) {
    this.props.requestUserExpenses(employee.id);
    this.setState({
      chooseEmployeeOpen: false,
      employeeUsername: employee.username
    });
  }

  render() {
    return(
      <div className='table'>
        {this.renderChooseEmployee()}
        <Table>
          <TableHeader adjustForCheckbox={false}
                       displaySelectAll={false}>
            <TableRow>
              {this.renderColNames()}
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            {this.renderRows()}
          </TableBody>
        </Table>
        {this.renderNewExpenseButton()}
        <ExpenseForm
          open={this.state.expenseFormOpen}
          toggleEventForm={this.toggleEventForm.bind(this)}
          formType={this.state.formType}
          expenseToEdit={this.state.expenseToEdit} />
        <ChooseEmployee
          open={this.state.chooseEmployeeOpen}
          employees={this.props.users}
          fetchEmployeeExpenses={this.fetchEmployeeExpenses.bind(this)} />
      </div>
    );
  }
}

import { connect } from 'react-redux';
import { requestUserExpenses } from '../../actions/expense_actions';
import { requestUsers } from '../../actions/user_actions';


const mapStateToProps = state => ({
  expenses: state.expenses,
  userId: state.user.id,
  users: state.users
});

const mapDispatchToProps = dispatch => ({
  requestUserExpenses: userId => dispatch(requestUserExpenses(userId)),
  requestUsers: () => dispatch(requestUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TabelContent);
