import React from 'react';

const Employee = ({name, onClick}) => (
  <div className='employee'>
    <p className='display-employee' onClick={onClick}>{name}</p>
  </div>
);

export default Employee;
