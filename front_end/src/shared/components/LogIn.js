import React, {Component} from 'react';
import { Link } from "react-router-dom";
//import { BrowserHistory } from 'react-router'

import './LogIn.css';

class LogIn extends Component {

    constructor(props){
        super(props)
        this.state = {
            email:'',
            password: ''
        }
    }

    submitHandler = event => {
        event.preventDefault();
        const data = this.state;
        console.log(data);
        
        console.log('email:', data.email,' password:',data.password);
       // BrowserHistory.push('/users')
    }
    inputChangeHandler = event => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value,
            [event.target.name]: event.target.value
        })
    }

    // componentDidMount=() =>{
    //     this.setState({
    //         email:''
    //     })
    // }

    render() {
        //const {email} = this.state;
        return(
        <form className='log-in' onSubmit={this.submitHandler}>
            <input className='log-in__input' type='text' placeholder='Enter tour e-mail' name='email' onChange={this.inputChangeHandler}/>
            <input className='log-in__input' type='text' placeholder='Enter tour password' name='password' onChange={this.inputChangeHandler}/>
            <button className='log-in__btn' type = 'submit'><Link to={`/users/${this.props.id} `}>Log In </Link></button>
        </form>
        )
    }
}

export default LogIn;