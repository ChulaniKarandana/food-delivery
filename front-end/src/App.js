import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import { Form, Icon, Input, Button,Layout, Menu, Breadcrumb } from 'antd';
import Contact from './components/Contact';
import AddFood from './components/AddFood';
import HorizontalLoginForm from "./components/login";
import RegisterForm from "./components/Register";
import Home from "./components/Home";
import MyMenu from "./components/Menu";
import EditFood from './components/EditFood';
import EditProfile from './components/EditProfile';
import {BrowserRouter, Route, Router, Switch, Link, Redirect, NavLink} from 'react-router-dom';

import "antd/dist/antd.css";


class App extends Component {


    render() {
        const { Header, Content, Footer } = Layout;
        return (
            <BrowserRouter>
                    <Form layout="inline" onSubmit={this.handleSubmit}>

            <Layout>
                <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                  <div className="logo" />
                  <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['1']}
                    style={{ lineHeight: '64px' }}
                  >
                    <Menu.Item key="1"><NavLink to="/">Home</NavLink></Menu.Item>
                    <Menu.Item key="2"><NavLink to="/register">Register</NavLink></Menu.Item>
                    <Menu.Item key="3"><NavLink to="/login">Login</NavLink></Menu.Item>
                  </Menu>
                </Header>

            </Layout>
                <Footer style={{ textAlign: 'center' }}>Accelaero Challenge ©2019 Created by Chulani Karandana</Footer>

            </Form>
            <switch>
            <Route exact path={'/'} component={Home}></Route>
            <Route exact path={'/contact'} component={Contact}></Route>
            <Route exact path={'/addFood'} component={AddFood}></Route>
            <Route exact path={'/register'} component={RegisterForm}></Route>
            <Route exact path={'/login'} component={HorizontalLoginForm}></Route>
            <Route exact path={'/menu'} component={MyMenu}></Route>
            <Route path={'/editFood'} component={EditFood}></Route>
            <Route path={'/editProfile'} component={EditProfile}></Route>
            </switch>

        </BrowserRouter>
        );
   }
    //);

}

export default App;

/*
                <Footer style={{ textAlign: 'center' }}>Accelaero Challenge ©2019 Created by Chulani Karandana</Footer>

<li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/addFood">Add Food</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">Contact</NavLink>
                        </li>
                        <li>
                            <NavLink to="/register">Register</NavLink>
                        </li>
                        <li>
                            <NavLink to="/login">Login</NavLink>
                        </li>
                        <li>
                            <NavLink to="/menu">Menu</NavLink>
                        </li>

*/
