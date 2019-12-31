import React from 'react';
import { Form, Icon, Input, Button, Layout } from 'antd';
import Welcome from "./wer.jpg";


class Home extends React.Component {
    componentDidMount() {
        // To disabled submit button at the beginning.
        this.props.form.validateFields();
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {


        });
    };

    render() {
        const { Header, Content, Footer } = Layout;
        return (
            <form align="center">
            <div><img src={Welcome} alt="website welcome" style={{width: 500, height: 500}}/></div>
            </form>
        );
    }
}

export default Form.create({ name: 'horizontal_login' })(Home);


