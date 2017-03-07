import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './app';

const AppStyle = () => (
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>
);

export default AppStyle;
