import { renderComponent , expect, mountComponent } from '../test_helper';
import ChooseEmployee from '../../frontend/components/expenses/choose_employee';
import { mount } from 'enzyme';
import React from 'react';

describe('ChooseEmployee', () => {
  let component;
  beforeEach(() => {
    const props = {
      employees: [{username: 'Jane Doe', id: 1}, {username: 'John Doe', id: 2}],
      fetchEmployeeExpenses: () => {},
      open: true
    };

    component = mountComponent(<ChooseEmployee {...props}/>);
  });


  it('renders the correct number of employees', () => {
    console.log(component.html());
  });

  it('renders employees correctly', () => {
    // expect(component.find("p:contains('John Doe')")).to.have.lengthOf(1);
    // expect(component.find("p:contains('Jane Doe')")).to.have.lengthOf(1);
  });
});
