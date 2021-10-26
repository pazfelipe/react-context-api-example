import React, { useState } from 'react';
import { AuthContext } from '../providers/auth';
import { LoadingScreenContext } from '../providers/loader';

const Login = () => {
  const { setUser } = React.useContext(AuthContext);
  const { setLoading } = React.useContext(LoadingScreenContext);

  const [input, setInput] = useState('');

  const handlerLogin = () => {
    setLoading(true);

    setTimeout(() => {
      setInput('');
      setLoading(false);
      setUser({ name: input });
      window.localStorage.setItem('user', JSON.stringify({ name: input }));
    }, 1400);
  };

  const handlerLogout = () => {
    setUser({
      name: ''
    });
    window.localStorage.removeItem('user');
  };

  return (
    <div>
      <input value={input} onChange={e => setInput(e.target.value)} />
      <p>
        <button onClick={handlerLogin}>Login</button>
      </p>
      <p>
        <button onClick={handlerLogout}>Logout</button>
      </p>
    </div>
  );
};

export default Login;