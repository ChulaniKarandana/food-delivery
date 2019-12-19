import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {Form} from "antd";
import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom"

/*ReactDOM.render(
  <App />,
  document.getElementById('root')
);*/

const WrappedHorizontalLoginForm = Form.create({ name: 'horizontal_login' })(App);

ReactDOM.render(<WrappedHorizontalLoginForm />, document.getElementById('root'));

