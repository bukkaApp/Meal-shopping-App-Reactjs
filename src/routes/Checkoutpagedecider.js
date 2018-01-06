import { Redirect } from "react-router-dom";
import React from 'react';
import {connect} from 'react-redux';
import Checking from './checking';

const checkoutpagedecider =(props)=>{
        return(
            (Object.keys(props.cart.cart).length)? 
                <Checking/>:
                <Redirect to='/'/>
        )
	}

const mapStateToProps=(state)=>{
	return state;
};

export default connect(mapStateToProps)(checkoutpagedecider);