import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import numeral from 'numeral';
import moment from 'moment';


class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      amount: 0,
      description: '',
      expenseId: null,
      userId: props.userId
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.formType === 'Edit Event') {
      this.setState({
        date: new Date(nextProps.expenseToEdit.date),
        amount: nextProps.expenseToEdit.amount * 100,
        description: nextProps.expenseToEdit.description,
        expenseId: nextProps.expenseToEdit.id
      });
    } else if (nextProps.formType === 'New Event') {
      this.setState({
        date: new Date(),
        amount: 0,
        description: '',
        expenseId: null
      });
    }
  }

  updateField(type, e, date) {
    if (type === 'date') {
      this.setState({ date });
    } else if (type === 'amount') {
      let amount = e.currentTarget.value.substr(1);
      amount = amount.split(',').join('');
      if (amount.length - amount.indexOf('.') === 2) {
        this.setState({ amount: parseFloat(amount, 10) * 10 });
      } else if ('0123456789'.includes(amount[amount.length - 1])) {
        this.setState({ amount: parseFloat(amount, 10) * 1000 });
      }
    }
    else if (type === 'desc') {
      this.setState({description: e.currentTarget.value});
    }
  }

  handleSubmit() {
    if (this.props.formType === 'New Event')
      this.props.createExpense(this.state, this.props.toggleEventForm);
    else if (this.props.formType === 'Edit Event')
      this.props.editExpense(this.state, this.props.toggleEventForm);
  }

  formatAmountValue() {
    return '$' + numeral(this.state.amount / 100).format('0,0.00').toString();
  }

  render() {

    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.props.toggleEventForm}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        onClick={this.handleSubmit.bind(this)}
      />,
  ];

    return (
      <Dialog
        title={this.props.formType}
        actions={actions}
        modal={true}
        open={this.props.open}
        contentStyle={{maxWidth: '350px', minHeight: '500px'}}
      >
        <form className='expense-form'>
          <DatePicker
            hintText="Date"
            value={this.state.date}
            mode="landscape"
            formatDate={date => moment(date).format('MMMM Do YYYY')}
            onChange={this.updateField.bind(this, 'date')} />
          <TextField
            floatingLabelText="Expense Amount"
            value={this.formatAmountValue()}
            onChange={this.updateField.bind(this, 'amount')} />
          <TextField
            floatingLabelText="Description"
            value={this.state.description}
            multiLine={true}
            rows={2}
            rowsMax={3}
            onChange={this.updateField.bind(this, 'desc')} />
        </form>
      </Dialog>
    );
  }
}

import { connect } from 'react-redux';
import { createExpense, editExpense } from '../../actions/expense_actions';

const mapStateToProps = state => ({
  userId: state.user.id
});

const mapDispatchToProps = dispatch => ({
  createExpense: (expense, toggleForm) => dispatch(createExpense(expense, toggleForm)),
  editExpense: (expense, toggleForm) => dispatch(editExpense(expense, toggleForm))
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseForm);
