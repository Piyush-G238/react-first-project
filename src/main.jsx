import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

/* 
21-04-2024
rendering App component inside the element with id 'root' in the browsernDOM (document object model)
and making App component as root component of application
*/
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
