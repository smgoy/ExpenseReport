import React from 'react';
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };
  }

  updateField(type, e) {
    if (type === 'usn')
      this.setState({username: e.currentTarget.value});
    else
      this.setState({password: e.currentTarget.value});
  }

  handleClick() {
    this.props.login(this.state);
  }

  render() {
    return (
      <form className='login-form'>
        <TextField
          floatingLabelText="Username"
          onChange={this.updateField.bind(this, 'usn')} />
        <TextField
          floatingLabelText="Password"
          onChange={this.updateField.bind(this, 'pass')} />
        <Link to='/expenses'><RaisedButton
          label="Login"
          type='password'
          onClick={this.handleClick.bind(this)} /></Link>
      </form>
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
