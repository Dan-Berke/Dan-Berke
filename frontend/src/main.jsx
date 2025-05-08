// src/main.jsx  (or wherever you create the router)
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.jsx';

const basename = import.meta.env.DEV ? '/' : '/Dan-Berke/';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename={'/Dan-Berke/'}>
      <App />
    </BrowserRouter>
  </StrictMode>
);
