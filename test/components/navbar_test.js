import { renderComponent , expect, sinon, removeItemSpy } from '../test_helper';
import { Navbar } from '../../frontend/components/navbar/navbar';

describe('Navbar', () => {
  let component;

  it('displays logo', () => {

  });

  describe('when not loggedin', () => {
    beforeEach(() => {
      component = renderComponent(Navbar, { loggedIn: false });
    });

    it('has no buttons', () => {
      expect(component.find('button')).to.have.lengthOf(0);
    });
  });

  describe('when loggedin as admin', () => {
    beforeEach(() => {
      component = renderComponent(Navbar, { loggedIn: true, admin: true });
    });

    it('has four buttons', () => {
      expect(component.find('button')).to.have.lengthOf(4);
    });
  });

  describe('when loggedin a regular employee', () => {
    beforeEach(() => {
      component = renderComponent(Navbar, { loggedIn: true, admin: false });
    });

    it('has three buttons', () => {
      expect(component.find('button')).to.have.lengthOf(3);
    });

    it('does not have a view employees expenses button', () => {
      expect(component.find("button:contains('View Employee Expenses')")).to.have.lengthOf(0);
    });
  });

  describe('logout button respond correctly to onClick action', () => {
    let logoutButton;
    const spy = sinon.spy();
    const props = {
      loggedIn: true,
      admin: true,
      logoutUser: spy
    };

    beforeEach(() => {
      component = renderComponent(Navbar, props);
      logoutButton = component.find("button:contains('Logout')");
      logoutButton.simulate('click');
    });

    it('logs the user out', () => {
      expect(spy).to.have.been.calledOnce;
    });

    it('clears token and currentUser from localStorage', () => {
      expect(removeItemSpy).to.have.been.calledWith('currentUser');
      expect(removeItemSpy).to.have.been.calledWith('token');
    });
  });
});
