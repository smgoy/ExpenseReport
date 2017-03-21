import React from 'react';
import { Table, TableBody, TableHeader,
         TableHeaderColumn, TableRow } from 'material-ui/Table';
import ReportRow from './report_row';
import moment from 'moment';
import DatePicker from 'material-ui/DatePicker';

window.moment = moment;

class ReportTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDateIdx: null,
      endDateIdx: null,
      expenses: null
    };
  }

  componentWillMount() {
    this.props.requestUserExpenses(this.props.userId);
  }

  componentWillReceiveProps(nextProps) {
    const { expenses } = nextProps;
    this.setState({
      startDateIdx: 0,
      endDateIdx: expenses.length - 1,
      expenses: expenses,
      defaultStartDate: new Date(expenses[0].date),
      defaultEndDate: new Date(expenses[expenses.length - 1])
    });
  }

  changeDate(type, e, date) {
    let idx;
    let expenses;
    if (type === 'start') {
      idx = 0;
      while (new Date(this.props.expenses[idx].date) < date) {
        idx++;
      }

      this.setState({
        startDateIdx: idx,
        expenses: this.props.expenses.slice(idx, this.state.endDateIdx)
      });
    } else if (type === 'end') {
      idx = this.props.expenses.length - 1;
      while (new Date(this.props.expenses[idx].date) > date) {
        idx--;
      }

      this.setState({
        endDateIdx: idx,
        expenses: this.props.expenses.slice(this.state.startDateIdx, idx)
      });
    }
  }

  render() {
    const tableRows = [];
    if (this.props.expenses.length !== 0) {
      let firstDayOfWeek = moment(this.state.expenses[0].date).startOf('week');
      let weekExpense = this.state.expenses[0].amount;
      for (let i = 0; i < this.state.expenses.length - 1; i++) {

        if (moment(this.state.expenses[i + 1].date).diff(firstDayOfWeek,'days') < 7) {
          weekExpense += this.state.expenses[i + 1].amount;
        } else {
          tableRows.push(
            <ReportRow
              key={firstDayOfWeek}
              week = {firstDayOfWeek}
              amount= {weekExpense} />
          );
          firstDayOfWeek = moment(this.state.expenses[i + 1].date).startOf('week');
          weekExpense = this.state.expenses[i + 1].amount;
        }
      }

      tableRows.push(
        <ReportRow
          key={firstDayOfWeek}
          week = {firstDayOfWeek}
          amount= {weekExpense} />
      );
    }

    return (
      <div className='expense-table-container'>
        <div className='date-container'>
          <p className='date-padding'>Filter Dates from:</p>
          <DatePicker
            defaultDate={this.state.defaultStartDate}
            formatDate={date => moment(date).format('MMMM Do YYYY')}
            mode="landscape"
            autoOk={true}
            id='start-date'
            onChange={this.changeDate.bind(this, 'start')} />
          <p className='date-padding'>to</p>
          <DatePicker
            defaultDate={this.state.defaultEndDate}
            formatDate={date => moment(date).format('MMMM Do YYYY')}
            mode="landscape"
            autoOk={true}
            id='end-date'
            onChange={this.changeDate.bind(this, 'end')} />
          </div>
        <Table>
          <TableHeader adjustForCheckbox={false}
                       displaySelectAll={false}>
            <TableRow>
              <TableHeaderColumn>Week of</TableHeaderColumn>
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
