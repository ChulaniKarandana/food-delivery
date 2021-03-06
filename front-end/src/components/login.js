import React from 'react';
import { Form, Icon, Input, Button } from 'antd';
import axios from "axios";
import Logo from "./rest";

function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class HorizontalLoginForm extends React.Component {
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

            this.verifyUser(userName, userPassword);
            //this.routeChange();
        });
    };

    verifyUser (userName, userPassword) {
        axios({
            method: 'post',
            url: 'http://localhost:8080/findUser',
            data: {
                userName: userName,
                userPassword: '',
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
            response => {
            console.log("%%%%%%%%%%%%%%");
                console.log(response.data[0]);
                if (userPassword == response.data[0].userPassword) {
                console.log("Correct");
                this.props.history.push( {
                    pathname: "/menu",
                    state: {user_detail: response.data[0].userId} // your data array of objects
                });
                }
            },
            error => {
                console.log(error);
                this.stayOnPage();
            }
        );
    }
    routeChange () {
        let path = '/menu';
        this.props.history.push(path);
    }

    stayOnPage () {
        let path = '/login';
        this.props.form.resetFields();
    }

    render() {
        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

        // Only show error after a field is touched.
        const usernameError = isFieldTouched('username') && getFieldError('username');
        const passwordError = isFieldTouched('password') && getFieldError('password');
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
                <Form.Item>
                    <Button type="primary" htmlType="submit" disabled={hasErrors(getFieldsError())}>
                        Log in
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}

export default Form.create({ name: 'vertical_login' })(HorizontalLoginForm);


