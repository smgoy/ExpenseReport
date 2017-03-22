import React from 'react';
import Dialog from 'material-ui/Dialog';
import Employee from './employee';

const ChooseEmployee = ({employees, fetchEmployeeExpenses, open}) => {

  const viewEmployees = [];
  employees.forEach( employee => {
    viewEmployees.push(
      <Employee
        key={employee.id}
        name={employee.username}
        onClick={fetchEmployeeExpenses.bind(null, employee.id)} />
    );
  });
  debugger;
  return (
    <Dialog
      title='Choose Employee'
      autoScrollBodyContent={true}
      open={open} >
      {viewEmployees}
    </Dialog>
  );
};

export default ChooseEmployee;
