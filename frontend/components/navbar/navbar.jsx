import React from 'react';
import { Link, hashHistory } from 'react-router';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import IconMenu from 'material-ui/IconMenu';
import ExpandMore from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';

const Navbar = ({loggedIn, admin, logoutUser}) => {

  const logout = () => {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('token');
    logoutUser();
  };

  const generateReport = () => {
    hashHistory.push('report');
  };

  const chooseEmployee = () => {
    hashHistory.push('employee-expense');
  };

  const myExenses = () => {
    hashHistory.push('expenses');
  };

  const adminOptions = () => {
    if (admin) {
      return <MenuItem onClick={chooseEmployee} primaryText="View Employees Expenses" />;
    } else {
      return undefined;
    }
  };

  const LoggedInOptions = (props) => (
    <IconMenu
      iconButtonElement={<FlatButton label="Menu" />}
      targetOrigin={{horizontal: 'right', vertical: 'top'}}
      anchorOrigin={{horizontal: 'right', vertical: 'top'}}>
      <MenuItem onClick={generateReport} primaryText="Generate Report" />
      <MenuItem onClick={myExenses} primaryText="My Expenses" />
      {adminOptions()}
      <MenuItem onClick={logout} primaryText="Logout" />
    </IconMenu>
  );

  return (
    <AppBar
      title = 'Expense Report'
      iconElementRight={loggedIn ? <LoggedInOptions /> : undefined} />
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
