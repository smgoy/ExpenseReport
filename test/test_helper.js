import _$ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import jsdom from 'jsdom';
import chai, { expect } from 'chai';
import { mount } from 'enzyme';
import chaiEnzyme from 'chai-enzyme';
import chaiJquery from 'chai-jquery';
import sinon from "sinon";
import sinonChai from "sinon-chai";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../frontend/reducers/master_reducer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();
chai.use(sinonChai);
chai.use(chaiEnzyme());

global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;
global.navigator = global.window.navigator;

const setItemSpy = sinon.spy();
const getItemSpy = sinon.spy();
const removeItemSpy = sinon.spy();
global.localStorage = {
  setItem: setItemSpy,
  getItem: getItemSpy,
  removeItem: removeItemSpy
};

const $ = _$(window);

chaiJquery(chai, chai.util, $);

function renderComponent(ComponentClass, props = {}) {
  const componentInstance =  TestUtils.renderIntoDocument(
    <MuiThemeProvider>
      <ComponentClass {...props} />
    </MuiThemeProvider>
  );

  return $(ReactDOM.findDOMNode(componentInstance));
}

function mountComponent(ComponentClass, props = {}) {
  return mount(
    <MuiThemeProvider>
      <ComponentClass {...props} />
    </MuiThemeProvider>
  );
}

$.fn.simulate = function(eventName, value) {
  if (value) {
    this.val(value);
  }
  TestUtils.Simulate[eventName](this[0]);
};

export {
  mountComponent,
  renderComponent,
  expect,
  sinon,
  removeItemSpy,
  getItemSpy,
  setItemSpy
};
