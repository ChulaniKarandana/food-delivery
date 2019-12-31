import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import { Form, Icon, Input, Button } from 'antd';
import { BrowserRouter, Route, Router, Switch, Link, Redirect, NavLink} from 'react-router-dom';
import { Table } from 'antd';
import AddFood from './AddFood';
import EditProfile from './EditProfile';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {foodItem: [],toForm: false};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.findFoodAll = this.findFoodAll.bind(this);

        this.findFoodAll();
    }

    handleChange(event) {
        const state = this.state;
        //state[event.target.name] = event.target.value;
        //this.setState(state);
    }

    handleSubmit(event) {
        event.preventDefault();

        this.findFoodAll();

    }




    findFoodAll () {
        const user_data = this.props.location.state;
        console.log(user_data.user_detail);
        axios({
            method: 'post',
            url: 'http://localhost:8080/findFoodAll',
            data: {
                id: '',
                foodName: '',
                cost: '',
                user_id: user_data.user_detail
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
                this.setState({foodItem : response.data});
                const data = this.state.foodItem;
                //console.log(success);
            },
            error => {
                console.log(error);
            }
        );
    }

    onDelete = (key, e) => {
        e.preventDefault();
        console.log("lllllllllll  "+ key);
        /*const data = this.state.data.filter(item => item.key !== key);
        this.setState({ data, isPageTween: false });*/
        const id = key;
        console.log(typeof key);
        axios({
            method: 'post',
            url: 'http://localhost:8080/deleteFood',
            data: {
                id: key,
                foodName: '',
                cost: ''
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
                window.location.reload();
            },
            error => {
                console.log(error);
            }
        );
      }

    onEdit = (key, e) => {
        e.preventDefault();
        axios({
            method: 'post',
            url: 'http://localhost:8080/findFood',
            data: {
                id: key,
                foodName: '',
                cost: ''
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
                console.log(response.data);
                this.props.history.push( {
                           pathname: "/editFood",
                           state: {detail: response.data} // your data array of objects
                           });

                //this.props.navigation.navigate("/editFood", {})
                //console.log(response.data.foodName);

            },
            error => {
                console.log(error);
            }
        );
      }

    navigateToAdd () {
        const user_data_add = this.props.location.state;
        this.props.history.push( {
                   pathname: "/addFood",
                   state: {detail: user_data_add.user_detail} // your data array of objects
        });
    }

    navigateToProfile () {
        const user_data_to = this.props.location.state;
        console.log("<<<<<<<<<<<<<<<<<"+user_data_to.user_detail);
        this.props.history.push( {
                   pathname: "/editProfile",
                   state: {detail: user_data_to.user_detail} // your data array of objects
        });
    }

    navigateToOrders () {
        const user_data_add = this.props.location.state;
        this.props.history.push( {
                   pathname: "/addFood",
                   state: {detail: user_data_add.user_detail} // your data array of objects
        });
    }
    navigateToDrivers () {
        const user_data_add = this.props.location.state;
        this.props.history.push( {
                   pathname: "/addFood",
                   state: {detail: user_data_add.user_detail} // your data array of objects
        });
    }

    render() {

        const columns = [
          {
            title: 'Food Name',
            dataIndex: 'foodName',
            key: 'foodName',
            render: text => <a>{text}</a>,
          },
          {
            title: 'Food Price',
            dataIndex: 'cost',
            key: 'cost',
          },
          {
            title: 'Action',
            dataIndex: '',
            key: 'x',
            render: (text, foodItem) => (
                      <Button
                        className={`${this.props.className}-delete`}
                        onClick={(e) => { this.onDelete(foodItem.id, e); }}
                      >
                        Delete
                      </Button>
                    )
          },
          {
            title: 'Action',
            dataIndex: '',
            key: 'y',
            render: (text, foodItem) => (
                      <Button
                        className={`${this.props.className}-edit`}
                        onClick={(e) => { this.onEdit(foodItem.id, e); }}
                      >
                        Edit
                      </Button>
                    )
            //render: () => <a><Button onClick={this.deleteFood()}>Delete</Button></a>,
          },

        ];

        const data = this.state.foodItem;

    return (
    <BrowserRouter>
    <Button
        onClick={(e) => { this.navigateToAdd(); }}
        >
        Add Food
    </Button>
    <Button
        onClick={(e) => { this.navigateToProfile(); }}
        >
        Edit Profile
    </Button>
    <Button

        >
        Accept Orders
    </Button>
    <Button

        >
        Find Drivers
    </Button>

    <Table
        columns={columns}
        dataSource={data}
        bordered
        title={() => 'Restaurent Menu'}
        footer={() => ''}
      />
    <switch>
    <Route exact path={'/editProfile'} component={EditProfile}></Route>
    </switch>
    </BrowserRouter>
    )

}
}

export default Form.create({ name: 'horizontal_login' })(Menu);
