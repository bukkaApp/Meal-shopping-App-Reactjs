import { Redirect } from "react-router-dom";
import React from 'react';
import {connect} from 'react-redux';
import Checking from './checking';
import {mapStateToProps} from '../util/ajax'

const checkoutpagedecider =(props)=>{
        return(
            (Object.keys(props.cart.cart).length)? 
                <Checking/>:
                <Redirect to='/'/>
        )
	}

export default connect(mapStateToProps)(checkoutpagedecider);