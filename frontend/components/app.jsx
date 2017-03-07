import React from 'react';
import Navbar from './home/navbar';

const App = ({children}) => (
  <div>
    <Navbar />
    {children}
  </div>
);

export default App;
