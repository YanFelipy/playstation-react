import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ToastContainer } from 'react-toastify';
import AllRoutes from './routes/allRoutes';



ReactDOM.render(
  <React.StrictMode>
    <AllRoutes />
    <ToastContainer theme="colored" autoClose={5000} />
  </React.StrictMode>,
  document.getElementById('root')
);

