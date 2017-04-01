import { renderComponent , expect, sinon } from '../test_helper';
import { Home } from '../../frontend/components/home/home';

describe('Home', () => {
  let component;
  const spy = sinon.spy();
  beforeEach(() => {
    component = renderComponent(Home, {loginUser: spy});
  });

  it('has two buttons', () => {
    expect(component.find('button')).to.have.lengthOf(2);
  });

  describe('buttons dispatch correct action', () => {
    it('has a button to log in an employee', () => {
      const employeeButton = component.find("button:contains('Employee')");
      expect(employeeButton).to.have.lengthOf(1);
      employeeButton.simulate('click');
      expect(spy).to.have.been.calledWith({
        username: 'sammy',
        password: 'password'
      });
    });

    it('has a button to log in an admin', () => {
      const adminButton = component.find("button:contains('Admin')");
      expect(adminButton).to.have.lengthOf(1);
      adminButton.simulate('click');
      expect(spy).to.have.been.calledWith({
        username: 'sammy',
        password: 'password'
      });
    });
  });
});
