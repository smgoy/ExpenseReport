import React from 'react';

const Employee = ({name, onClick}) => (
  <p onClick={onClick}>{name}</p>
);

export default Employee;
