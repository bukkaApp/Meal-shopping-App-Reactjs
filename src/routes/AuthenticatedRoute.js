import { Redirect } from "react-router-dom";
import React from 'react';
import {connect} from 'react-redux';
import Profile from './profile';

const authenticatedRoute =(props)=>{
		return((props.user.isAuthenticated)?
				 <Profile/>: 
				 <Redirect to='/'/>
				)
}

const mapStateToProps=(state)=>{
	return state;
};

export default connect(mapStateToProps)(authenticatedRoute);
