import React from 'react';
import { Table, TableBody, TableHeader,
         TableHeaderColumn, TableRow } from 'material-ui/Table';
import NewExpenseButton from '../expenses/new_expense_button';
import ExpenseForm from '../expenses/expense_form';
import ChooseEmployee from '../expenses/choose_employee';
import Row from './row';
import RaisedButton from 'material-ui/RaisedButton';
import FilterDates from '../report/filter_dates';
import moment from 'moment';

class TabelContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expenseToEdit: null,
      expenseFormOpen: props.config.expenseFormOpen,
      chooseEmployeeOpen: props.config.chooseEmployeeOpen,
      tableType: this.cleanPathName(props.location.pathname),
      formType: '',
      employeeUsername: '',
      startDate: new Date(),
      endDate: new Date()
    };
  }

  componentWillReceiveProps(nextProps) {
    let startDate = new Date();
    let endDate = new Date();
    if (nextProps.expenses.length !== 0) {
      startDate = new Date(nextProps.expenses[0].date);
      endDate = new Date(nextProps.expenses[nextProps.expenses.length - 1].date);
    }
    this.setState({
      tableType: this.cleanPathName(nextProps.location.pathname),
      startDate,
      endDate
    });
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

  changeDate(type, e, date) {
    if (type === 'start') {
      this.setState({
        startDate: date
      });
    } else if (type === 'end') {
      this.setState({
        endDate: date
      });
    }
  }

  createReport(expenses) {
    const reportHash = {};
    expenses.forEach( expense => {
      if (new Date(expense.date) >= this.state.startDate && new Date(expense.date) <= this.state.endDate) {
        const firstDayOfWeek = moment(expense.date).startOf('week');
        reportHash[firstDayOfWeek] = reportHash[firstDayOfWeek] + expense.amount || expense.amount;
      }
    });
    return reportHash;
  }

  renderRows() {
    const tableRows = [];

    if (this.state.tableType === 'report') {
      const reportHash = this.createReport(this.props.expenses);
      Object.keys(reportHash).forEach( date => {
        tableRows.push(
          <Row
            key={date}
            row={{date, amount: reportHash[date]}}
            pathname={this.state.tableType} />
        );
      });
    } else {
      this.props.expenses.forEach(expense => {
        tableRows.push(
          <Row
            key={expense.id}
            row={expense}
            toggleEventForm={this.toggleEventForm.bind(this, 'edit', expense)}
            pathname={this.state.tableType} />
        );
      });
    }

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

  renderFilterDate() {
    if (this.state.tableType === 'report') {
      const { expenses } = this.props;
      if (expenses.length !== 0) {
        const startDate = this.state.startDate;
        const endDate = this.state.endDate;
        return (
          <FilterDates
            startDate={startDate}
            endDate={endDate}
            changeDate={this.changeDate.bind(this)} />
        );
      }
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
        {this.renderFilterDate()}
        <Table>
          <TableHeader adjustForCheckbox={false}
                       displaySelectAll={false}>
            <TableRow>
              {this.renderColNames()}
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            {this.state.chooseEmployeeOpen ? null : this.renderRows()}
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
