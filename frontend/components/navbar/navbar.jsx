import React from 'react';
import { Link, hashHistory } from 'react-router';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

const Navbar = ({user}) => {

  let navbarButtons;

  if (user.loggedIn && user.admin) {
    navbarButtons = [];
  }
  else if (user.loggedIn) {
    navbarButtons = [];
  }

  return (
    <AppBar
      title = 'Expense Report'
      iconElementRight={navbarButtons} />
  );
};

export default Navbar;
