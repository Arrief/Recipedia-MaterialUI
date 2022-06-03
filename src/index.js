import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/system';
import App from './App';
// import theme from './theme';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    {/* <ThemeProvider> */}
      <App />
    {/* </ThemeProvider> */}
  </BrowserRouter>
);
