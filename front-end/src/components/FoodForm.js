import React, { Component } from 'react';
import './App.css';
//import ApiService from './APIService';
import axios from 'axios'
import { Form, Icon, Input, Button } from 'antd';

class FoodForm extends Component {
    constructor(props) {
        super(props);
        this.state = {foodName: '', cost: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.addFood = this.addFood.bind(this);
    }

    handleChange(event) {
        const state = this.state;
        state[event.target.name] = event.target.value;
        this.setState(state);
    }

    handleSubmit(event) {
        event.preventDefault();

        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
            let name = values.foodName;
            let cost = values.cost;

            this.addFood(name, cost);

        });
    }

    addFood (foodName, cost) {
        axios({
            method: 'post',
            url: 'http://localhost:9090/create',
            data: {
                foodName: foodName,
                cost: cost
            },
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": "true",
                "Access-Control-Allow-Headers":
                    "Origin, X-Requested-With, Content-Type, Accept"
            }
        }).then(
            success => {
                console.log(success);
            },
            error => {
                console.log(error);
            }
        );
    }


    render() {
        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

        // Only show error after a field is touched.
        const foodNameError = isFieldTouched('foodName') && getFieldError('foodName');
        const costError = isFieldTouched('cost') && getFieldError('cost');

        function hasErrors(fieldsError) {
            return Object.keys(fieldsError).some(field => fieldsError[field]);
        }

        return (
            <Form layout="inline" onSubmit={this.handleSubmit}>
                <Form.Item validateStatus={foodNameError ? 'error' : ''} help={foodNameError || ''}>
                    {getFieldDecorator('foodName', {
                        rules: [{ required: true, message: 'Please input your food name!' }],
                    })(
                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Food Name"
                        />,
                    )}
                </Form.Item>
                <Form.Item validateStatus={costError ? 'error' : ''} help={costError || ''}>
                    {getFieldDecorator('cost', {
                        rules: [{ required: true, message: 'Please input your Cost for food!' }],
                    })(
                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
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
        );
    }
    //);

}

export default FoodForm;
