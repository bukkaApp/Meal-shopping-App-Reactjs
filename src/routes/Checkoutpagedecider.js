import { Route, Redirect } from "react-router-dom";
import React, { Component } from 'react';
import {connect} from 'react-redux';
import App from './App';
import Checking from './checking';

class checkoutpagedecider extends Component{
	constructor(props) {
        super(props)
	}
	render(){
        return(
            (Object.keys(this.props.cart.cart).length)? 
        <Checking/>:
        <Redirect to='/'/>
    )
	}
	}

const mapStateToProps=(state)=>{
	return state;
};

export default connect(mapStateToProps)(checkoutpagedecider);