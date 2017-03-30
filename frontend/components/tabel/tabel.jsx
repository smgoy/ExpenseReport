import React from 'react';
import { Table, TableBody, TableHeader,
         TableHeaderColumn, TableRow } from 'material-ui/Table';
import NewExpenseButton from '../expenses/new_expense_button';
import ExpenseForm from '../expenses/expense_form';

class TabelContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expenseToEdit: null,
      expenseFormOpen: props.config.expenseFormOpen,
      chooseEmployeeOpen: props.config.chooseEmployeeOpen,
      tableType: props.location.pathname,
      formType: ''
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ tableType: nextProps.location.pathname });
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

    if (tableType === 'expenses' || tableType === '/expenses') {
        colNames = ['Date', 'Amount', 'Description', 'Edit | Delete'];
    } else if (tableType === 'report' || tableType === '/report') {
        colNames = ['Date', 'Amount', 'Description'];
    } else if (tableType === 'employee-expense' || tableType === '/employee-expense') {
        colNames = ['Week of', 'Amount'];
    }

    colNames = colNames.map( name => (
      <TableHeaderColumn key={name}>{name}</TableHeaderColumn>
    ));

    return colNames;
  }

  renderNewExpenseButton() {
    const { tableType } = this.state;
    if (tableType === 'expenses' || tableType === '/expenses') {
      return (
        <NewExpenseButton
          toggleEventForm={this.toggleEventForm.bind(this, 'new')} />
      );
    } else {
      return null;
    }
  }

  render() {
    return(
      <div className='table'>
        <Table>
          <TableHeader adjustForCheckbox={false}
                       displaySelectAll={false}>
            <TableRow>
              {this.renderColNames()}
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>

          </TableBody>
        </Table>
        {this.renderNewExpenseButton()}
        <ExpenseForm
          open={this.state.expenseFormOpen}
          toggleEventForm={this.toggleEventForm.bind(this)}
          formType={this.state.formType}
          expenseToEdit={this.state.expenseToEdit} />
      </div>
    );
  }
}

export default TabelContent;
