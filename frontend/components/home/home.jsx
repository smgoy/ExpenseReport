import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class Home extends React.Component {
  compoenetWillMount() {

  }

  login(type) {
    if (type === 'admin') {
      this.props.login({
        username: 'sammy',
        password: 'password'
      });
    } else if (type === 'employee') {
      this.props.login({
        username: 'sammy',
        password: 'password'
      });
    }

  }

  render() {
    return(
      <div className='home'>
        <h1 className='intro-text-h1'>Hello, thanks for visiting.</h1>
        <h2 className='intro-text-h2'>
          I crafted this applicaiton with the help of:
        </h2>
        <h3 className='intro-text-tech'>
          Node — Express — Sequelize — React — Redux — Matrial-UI
        </h3>
        <h2 className='intro-text-h2'>
          This expense report application is complete with user authentication,
          protected routes and differs in functionality if a user is an
          adminitrator.
        </h2>
        <div className='login-button-container'>
          <h1 className='intro-text-h1'>Check it out:</h1>
          <RaisedButton
            label='Login as an Admin'
            primary={true}
            onClick={this.login.bind(this, 'admin')} />
          <RaisedButton
            label='Login as an Employee'
            primary={true}
            onClick={this.login.bind(this, 'employee')} />
        </div>
      </div>
    );
  }
}

import { connect } from 'react-redux';
import { login } from '../../actions/login_actions';

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
