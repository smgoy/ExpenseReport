import React from 'react';
import { Link, hashHistory } from 'react-router';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

const Navbar = ({loggedIn, admin, logoutUser}) => {

  const logout = () => {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('token');
    logoutUser();
  };

  let logoutButton;

  if (loggedIn) {
    logoutButton = <FlatButton label='Logout' onClick={logout} />;
  }

  return (
    <AppBar
      title = 'Expense Report'
      iconElementLeft={null}
      iconElementRight={logoutButton} />
  );
};

import { connect } from 'react-redux';
import { logout } from '../../actions/login_actions';

const mapStateToProps = state => ({
  loggedIn: state.user.loggedIn,
  admin: state.user.admin
});

const mapDispatchToProps = dispatch => ({
  logoutUser: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
