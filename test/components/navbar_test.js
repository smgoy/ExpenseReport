import { renderComponent , expect } from '../test_helper';
import Navbar from '../../frontend/components/navbar/navbar';

describe('Navbar', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(Navbar);
  });

  it('displays logo', () => {

  });

  describe('when not loggedin', () => {
    it('has no buttons', () => {

    });
  });

  describe('when loggedin as admin', () => {
    it('has four buttons', () => {

    });
  });

  describe('when loggedin a regular employee', () => {
    it('has three buttons', () => {

    });

    it('does not have a view employees expenses button', () => {

    });
  });

  describe('buttons respond correctly to onClick action', () => {
    it('has a button that logs user out', () => {

    });

    it('has a button that pushes user to /expenses route', () => {

    });

    it('has a button that pushes user to /report route', () => {

    });

    it('has a button that pushes user to /employee-expenses', () => {

    });
  });
});
