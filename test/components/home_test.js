import { renderComponent , expect } from '../test_helper';
import Home from '../../frontend/components/home/home';

describe('Home', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(Home);
  });

  it('has two buttons', () => {
    expect(component.find('button')).to.have.lengthOf(2);
  });

  describe('buttons dispatch correct action', () => {
    it('has a button that logs in employee', () => {

    });

    it('has a button that logs in admin', () => {

    });
  });


});
