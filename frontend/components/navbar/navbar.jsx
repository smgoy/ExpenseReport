import React from 'react';
import { Link, hashHistory } from 'react-router';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

const Navbar = () => {

  let navbarButtons = [];

  // if (user.loggedIn && user.admin) {
  //   navbarButtons = [];
  // }
  // else if (user.loggedIn) {
  //   navbarButtons = [];
  // } else {
  //   navbarButtons = [];
  // }

  return (
    <AppBar
      title = 'Expense Report' />
  );
};

export default Navbar;
