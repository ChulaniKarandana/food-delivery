import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {Form} from "antd";
import { BrowserRouter, Router, Route, Switch, withRouter,NavLink } from "react-router-dom";

import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'


// optional cofiguration
const options = {
  // you can also just use 'bottom center'
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: '30px',
  // you can also just use 'scale'
  transition: transitions.SCALE
}

const Root = () => (
  <AlertProvider template={AlertTemplate} {...options}>
    <App />
  </AlertProvider>
)


ReactDOM.render(
  <App />,
  document.getElementById('root')
);

//const WrappedHorizontalLoginForm1 = Form.create({ name: 'horizontal_login' })(App);

/*const WrappedAddFood = Form.create({ name: 'horizontal_login' })(AddFood);


const WrappedHorizontalLoginForm = Form.create({ name: 'horizontal_login' })(HorizontalLoginForm);*/

//ReactDOM.render(document.getElementById('root'));

