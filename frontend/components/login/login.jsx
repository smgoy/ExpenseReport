import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form className='login-form'>
        <TextField
          floatingLabelText="Username" />
        <TextField
          floatingLabelText="Password" />
        <RaisedButton label="Login" />
      </form>
    );
  }
}

export default LoginForm;
