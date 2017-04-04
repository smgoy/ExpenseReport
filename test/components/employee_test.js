import { renderComponent , expect } from '../test_helper';
import Employee from '../../frontend/components/expenses/employee';

describe('Employee', () => {
  it("renders a single employee name", () => {
    const component = renderComponent(Employee, {name: 'John Doe'});
    expect(component.find('p')).to.have.html('John Doe');
  });

  //should probably test if onClick it closes the modal
  //maybe better to test in tabel...but tbd
});
