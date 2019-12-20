import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {Form} from "antd";
import { BrowserRouter, Router, Route, Switch, withRouter,NavLink } from "react-router-dom";
import FoodForm from "./components/FoodForm";
import AddFood from "./components/AddFood";
import HorizontalLoginForm from "./components/login";

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

//const WrappedHorizontalLoginForm1 = Form.create({ name: 'horizontal_login' })(App);

/*const WrappedAddFood = Form.create({ name: 'horizontal_login' })(AddFood);


const WrappedHorizontalLoginForm = Form.create({ name: 'horizontal_login' })(HorizontalLoginForm);*/

//ReactDOM.render(document.getElementById('root'));

