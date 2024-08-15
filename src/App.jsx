import React from 'react';
import { AuthProvaider } from './Provaider';

import './reset.css';
import Rout from './Rout';

const App = () => {
  return (
    <>
      <AuthProvaider>
        <Rout />
      </AuthProvaider>
    </>
  );
};

export default App;
