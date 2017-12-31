import { Route, Redirect } from "react-router-dom";
import React, { Component } from 'react';
import {connect} from 'react-redux';
import Profile from './profile';
import App from './App';

class authenticatedRoute extends Component{
	constructor(props) {
		super(props)
	}
	render(){
		return((this.props.user.isAuthenticated)? <Profile/>: <Redirect to='/'/> )
	}
	}

const mapStateToProps=(state)=>{
	return state;
};

export default connect(mapStateToProps)(authenticatedRoute);
