import React from 'react';
import ReactDOM from 'react-dom';
import './app/layout/Styles.css';  // css style import
import App from './app/layout/App'; // when exporting default uses this import AppName
import reportWebVitals from './reportWebVitals';
import { Router } from 'react-router-dom';
//import Catalog from './features/catalog/Catalog';
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();


// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );
// root.render(
//   <React.StrictMode>
//     <Router history={history}>
//       <App />
//     </Router>
//   </React.StrictMode>
// );

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
        <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
