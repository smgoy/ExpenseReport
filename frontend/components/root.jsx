import React from 'react';
import { Provider } from 'react-redux';
import AppStyle from './app_style';


const Root = ({store}) => (
  <Provider store={store}>
    <AppStyle />
  </Provider>
);

export default Root;
