import React from 'react';
import ReactDOM from 'react-dom/client';
import './app/layout/Styles.css';  // css style import
import App from './app/layout/App'; // when exporting default uses this import AppName
import reportWebVitals from './reportWebVitals';
//import Catalog from './features/catalog/Catalog';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
