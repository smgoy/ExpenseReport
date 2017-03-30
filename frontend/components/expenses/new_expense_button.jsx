import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const NewExpenseButton = ({toggleEventForm}) => (
  <div className='add-expense'>
    <p className='add-expense-text'>Add an Expense</p>
    <FloatingActionButton onClick={toggleEventForm}>
      <ContentAdd />
    </FloatingActionButton>
  </div>
);

export default NewExpenseButton;
