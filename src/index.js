import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import LoadingScreen from './components/lodingScreen';
import { AuthProvider } from './providers/auth';
import { LoadingScreenProvider } from './providers/loader';


ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <LoadingScreenProvider>
        <LoadingScreen />
        <App />
      </LoadingScreenProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);