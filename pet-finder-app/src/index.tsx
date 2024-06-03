import React from 'react';
import ReactDOM from 'react-dom/client';
import { LoginPage } from './views/pages/public/login/login-page';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <LoginPage />
  </React.StrictMode>
);

