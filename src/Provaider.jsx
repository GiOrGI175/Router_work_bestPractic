import { createContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvaider = ({ children }) => {
  const [auth, setAuth] = useState(null);

  const value = { auth };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
