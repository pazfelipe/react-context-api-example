import React from 'react';
import { useLoader } from '../providers/loader';

const style = {
  height: '100vh',
  width: '100%',
  backgroundColor: '#000011d9',
  color: '#ff889d',
  position: 'fixed',
  top: 0,
  left: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

const LoadingScreen = () => {

  const { loading } = useLoader();

  const Loader = () => <div><div style={style}>Loading</div></div>;

  return (
    <div>
      {loading && <Loader />}
    </div>
  );

};

export default LoadingScreen;