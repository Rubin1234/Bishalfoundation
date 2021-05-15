import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Routes from './Routes';
import { DataProvider } from './GlobalState';

ReactDOM.render(
  <React.StrictMode>
    <DataProvider>
        <Routes/>
    </DataProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
