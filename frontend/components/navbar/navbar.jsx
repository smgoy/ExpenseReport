import React from 'react';
import { Link, hashHistory } from 'react-router';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';

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

  const buttons = () => {
    let buttonArray = [];
    const style = {color: 'white'};

    if (loggedIn) {
      buttonArray = [
        <FlatButton
          key='report'
          label='Generate Report'
          onClick={generateReport}
          style={style} />,
        <FlatButton
          key='expenses'
          label='My Expenses'
          onClick={myExenses}
          style={style} />,
        <FlatButton
          key='logout'
          label='Logout'
          onClick={logout}
          style={style} />
      ];

      if (admin) {
        buttonArray.unshift(
          <FlatButton
            key='employee expenses'
            label='View Employee Expenses'
            onClick={chooseEmployee}
            style={style} />
        );
      }
    }
    return buttonArray;
  };

  const style = {
    width: '100%',
    height: 60,
    backgroundColor: '#00BCD4'
  };

  return (
    <Paper style={style} zDepth={1}>
      <nav className='navbar'>
        <p className='logo'>ExpenseReport</p>
        <div className='navbar-buttons'>
          {buttons()}
        </div>
      </nav>
    </Paper>
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
