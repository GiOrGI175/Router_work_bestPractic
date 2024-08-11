import React from 'react';
import { AuthProvaider } from './Provaider';

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
