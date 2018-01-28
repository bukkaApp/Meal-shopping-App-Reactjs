import React,{Component} from 'react';
import { Redirect } from "react-router-dom";
import {connect} from 'react-redux';
import Checking from './checking';
import {mapStateToProps} from '../util/ajax'
import lib from '../util/lib'

class checkoutpagedecider extends Component {
        
        componentWillUnmount(){
		lib.previouspath(this.props.location.pathname)
	}
        render(){
        return(
            (Object.keys(this.props.cart.cart).length)? 
                <Checking/>:
                <Redirect to='/'/>
        )
        }
}

export default connect(mapStateToProps)(checkoutpagedecider);