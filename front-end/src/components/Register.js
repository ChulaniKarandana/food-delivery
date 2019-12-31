import React from 'react';
import { Form, Icon, Input, Button } from 'antd';
import axios from "axios";
import Logo from "./rest";


function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class RegisterForm extends React.Component {

    componentDidMount() {
        // To disabled submit button at the beginning.
        this.props.form.validateFields();

    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }

            let userName = values.username;
            let userPassword = values.password;
            let confirmPassword = values.confirmpassword;
            let phoneNum = values.phone;
            let address = values.address;

            if (userPassword == confirmPassword) {
                this.addUser(userName, userPassword, phoneNum, address);
                this.routeChange();
            }
            else {
                this.stayOnPage();
            }

        });
    };

    addUser (userName, userPassword,phoneNum, address) {
        axios({
            method: 'post',
            url: 'http://localhost:8080/register',
            data: {
                userName: userName,
                userPassword: userPassword,
                userPhone: phoneNum,
                userAddress: address
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
            },
            error => {
                console.log(error);
            }
        );
    }

    routeChange () {
        let path = '/login';
        this.props.history.push(path);
    }

    stayOnPage () {
        let path = '/register';
        this.props.form.resetFields();
    }

    render() {
        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

        // Only show error after a field is touched.
        const usernameError = isFieldTouched('username') && getFieldError('username');
        const passwordError = isFieldTouched('password') && getFieldError('password');
        const confirmError = isFieldTouched('confirmpassword') && getFieldError('confirmpassword');
        const phoneError = isFieldTouched('phone') && getFieldError('phone');
        const addressError = isFieldTouched('address') && getFieldError('address');
        return (
            <Form layout="inline" onSubmit={this.handleSubmit} align="center">
            <div><img src={Logo} alt="website logo" style={{width: 200, height: 200}}/></div>
            <li>
                <Form.Item validateStatus={usernameError ? 'error' : ''} help={usernameError || ''}>
                    {getFieldDecorator('username', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Username"
                        />,
                    )}
                </Form.Item>
            </li>
            <li>
                <Form.Item validateStatus={phoneError ? 'error' : ''} help={phoneError || ''}>
                    {getFieldDecorator('phone', {
                        rules: [{ required: true, message: 'Please input phone number!' }],
                    })(
                        <Input
                            prefix={<Icon type="phone" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Phone Number"
                        />,
                    )}
                </Form.Item>
            </li>
            <li>
                <Form.Item validateStatus={addressError ? 'error' : ''} help={addressError || ''}>
                    {getFieldDecorator('address', {
                        rules: [{ required: true, message: 'Please input a valid address!' }],
                    })(
                        <Input
                            prefix={<Icon type="bank" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Restaurant Address"
                        />,
                    )}
                </Form.Item>
            </li>

            <li>
                <Form.Item validateStatus={passwordError ? 'error' : ''} help={passwordError || ''}>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="Password"
                        />,
                    )}
                </Form.Item>
            </li>
            <li>
                <Form.Item validateStatus={confirmError ? 'error' : ''} help={confirmError || ''}>
                    {getFieldDecorator('confirmpassword', {
                         rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                         <Input
                             prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                             type="password"
                             placeholder="Confirm Password"
                          />,
                    )}
                 </Form.Item>
            </li>
                <Form.Item>
                    <Button type="primary" htmlType="submit" disabled={hasErrors(getFieldsError())}>
                        Register
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}

export default Form.create({ name: 'horizontal_login' })(RegisterForm);


