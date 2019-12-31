import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import { Form, Icon, Input, Button } from 'antd';
import MyMenu from "./Menu";
import { BrowserRouter, Route, Router, Switch, Link, Redirect } from 'react-router-dom';


class EditFood extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.addFood = this.addFood.bind(this);
    }

    componentDidMount() {

    }

    handleChange(event) {
        const state = this.state;
        state[event.target.name] = event.target.value;
        this.setState(state);

    }

    handleSubmit(event) {
        event.preventDefault();
        const datas = this.props.location.state;
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
            let foodId = datas.detail.id;
            let name = values.foodName;
            let cost = values.cost;
            let user_id = datas.detail.user_id;

            this.addFood(foodId,name, cost, user_id);

        });


    }


    navigateToMenu () {
        const data_to_menu = this.props.location.state;
        console.log(">>>>>>>>>>>>>>>>>>>"+ data_to_menu.detail);
        this.props.history.push( {
                   pathname: "/menu",
                   state: {user_detail: data_to_menu.detail.id} // your data array of objects
        });
    }

    addFood (id,foodName, cost, user_id) {
        axios({
            method: 'post',
            url: 'http://localhost:8080/create',
            data: {
                id: id,
                foodName: foodName,
                cost: cost,
                user_id: user_id
            },
            headers: {
                authorization: 'Basic ' + window.btoa("Chulani" + ":" + "1234"),
                "Content-type": "application/json; charset=UTF-8",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": "true",
                "Access-Control-Allow-Headers":
                    "Origin, X-Requested-With, Content-Type, Accept"
            }
        }).then(
            success => {
                console.log(success);
                alert("Successfully Updated The Food Details")
            },
            error => {
                console.log(error);
                alert("Update Unsuccessful")
            }
        );
    }

    navigateToMenu () {
        const data_to_menu = this.props.location.state;
        console.log(">>>>>>>>>>>>>>>>>>>"+ data_to_menu.detail);
        this.props.history.push( {
                   pathname: "/menu",
                   state: {user_detail: data_to_menu.detail.user_id} // your data array of objects
        });
    }


    render() {
        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

        const foodNameError = isFieldTouched('foodName') && getFieldError('foodName');
        const costError = isFieldTouched('cost') && getFieldError('cost');

        function hasErrors(fieldsError) {
            return Object.keys(fieldsError).some(field => fieldsError[field]);
        }

        const data = this.props.location.state;


        return (
            <BrowserRouter>
                <Form layout="inline" onSubmit={this.handleSubmit}>
                    <Form.Item validateStatus={foodNameError ? 'error' : ''} help={foodNameError || ''}>
                        {getFieldDecorator('foodName', {initialValue: data.detail.foodName,}, {
                            rules: [{ required: true, message: 'Please input your food name!' }],
                        })(
                            <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Food Name"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item validateStatus={costError ? 'error' : ''} help={costError || ''}>
                        {getFieldDecorator('cost', {initialValue: data.detail.cost,}, {
                            rules: [{ required: true, message: 'Please input your Cost for food!' }],
                        })(
                            <Input
                                prefix={<Icon type="bell" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="text"
                                placeholder="Cost"
                            />,
                        )}
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" disabled={hasErrors(getFieldsError())}>
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            <Button
                onClick={(e) => { this.navigateToMenu(); }}
                >
                Back To Menu
            </Button>
            <switch>
            <Route exact path={'/menu'} component={MyMenu}></Route>
            </switch>

            </BrowserRouter>

        );
    }

}

export default Form.create({ name: 'horizontal_login' })(EditFood);
