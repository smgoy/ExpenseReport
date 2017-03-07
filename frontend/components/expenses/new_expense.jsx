import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import numeral from 'numeral';


class NewExpense extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: '',
      amount: '',
      description: ''
    };
  }

  updateField(type, e, date) {
    if (type === 'date')
      this.setState({date});
    else if (type === 'amount')
      this.setState({amount: e.currentTarget.value});
    else if (type === 'desc')
      this.setState({description: e.currentTarget.value});
  }

  handleSubmit() {
    this.props.toggleEventForm();
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
        title="New Expense"
        actions={actions}
        modal={true}
        open={this.props.open}
        contentStyle={{maxWidth: '350px', minHeight: '500px'}}
      >
        <form className='expense-form'>
          <DatePicker
            hintText="Date"
            mode="landscape"
            onChange={this.updateField.bind(this, 'date')} />
          <TextField
            floatingLabelText="Expense Amount"
            value={this.state.amount}
            onChange={this.updateField.bind(this, 'amount')} />
          <TextField
            floatingLabelText="Description"
            multiLine={true}
            rows={2}
            rowsMax={3}
            onChange={this.updateField.bind(this, 'desc')} />
        </form>
      </Dialog>
    );
  }
}

export default NewExpense;
