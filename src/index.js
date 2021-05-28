import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom'
import RoutingComponent from './RoutingComponent';
import reportWebVitals from './reportWebVitals';

// add google analytics
import ReactGA from 'react-ga'
ReactGA.initialize('UA-197580585-1');

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <h3>Add Google Analytics to React App</h3>
      <RoutingComponent />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
