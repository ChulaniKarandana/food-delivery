import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import { Form, Icon, Input, Button } from 'antd';
import FoodForm from './components/FoodForm';
import AddFood from './components/AddFood';
import HorizontalLoginForm from "./components/login";
import {BrowserRouter, Route, Router, Switch, Link, Redirect, NavLink} from 'react-router-dom';


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                    <Form layout="inline" onSubmit={this.handleSubmit}>
                        <li>
                            <NavLink to="/addFood">Add Food</NavLink>
                        </li>
                        <li>
                            <NavLink to="/foodForm">Contact</NavLink>
                        </li>
                    </Form>
                <switch>
                    <Route exact path={'/'} component={HorizontalLoginForm}></Route>
                    <Route exact path={'/foodForm'} component={FoodForm}></Route>
                    <Route exact path={'/addFood'} component={AddFood}></Route>
                </switch>

            </BrowserRouter>

                );
            }
    //);

}

export default App;
