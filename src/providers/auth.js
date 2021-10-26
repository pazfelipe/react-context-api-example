import React, { useEffect, useState } from 'react';

export const AuthContext = React.createContext({});

export const AuthProvider = props => {

  const [user, setUser] = useState({
    name: ''
  });

  useEffect(() => {
    const user = window.localStorage.getItem('user');
    if (user) {
      setUser(JSON.parse(user));
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);