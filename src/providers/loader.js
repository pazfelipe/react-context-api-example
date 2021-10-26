import React, { useContext, useState } from 'react';

export const LoadingScreenContext = React.createContext({});

export const LoadingScreenProvider = props => {

  const [loading, setLoading] = useState(false);

  return (
    <LoadingScreenContext.Provider value={{ loading, setLoading }}>
      {props.children}
    </LoadingScreenContext.Provider>
  );
};

export const useLoader = () => useContext(LoadingScreenContext);