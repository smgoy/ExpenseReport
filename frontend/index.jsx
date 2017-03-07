import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Root from './components/root';
import configureStore from './store/store';

injectTapEventPlugin();

document.addEventListener('DOMContentLoaded', () => {
  let store;
  let currentUser = localStorage.getItem('currentUser');
  if (currentUser) {
    currentUser = JSON.parse(currentUser);
    const initialState = {
      user: {
        loggedIn: true,
        username: currentUser.username,
        admin: currentUser.admin
      }
    };
    store = configureStore(initialState);
  } else {
    store = configureStore();
  }

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
