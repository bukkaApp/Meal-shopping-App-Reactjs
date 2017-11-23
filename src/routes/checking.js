import React, { Component } from 'react';
import logo from '../logo.svg';
import '../style/App.css';
import '../style/index.css';
import PageBackground from '../frontpage/PageBackground';
import ScrollLogic from '../frontpage/ScrollLogic';
import MenuPage from '../menu/menuPage';
import MenuItems from '../menu/menuItems';
import CheckoutPage from '../checkout/checkoutPage';
import CheckoutSlip from '../checkout/checkoutSlip';
import {connect} from 'react-redux';


class Checking extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<div className="devi"><PageBackground/> <CheckoutPage newUser={this.newUser} user={this.state.user} /> <CheckoutSlip cart={this.state.cart} user={this.state.user} address={this.state.address} deleteCart={this.deleteCart} quantityUpdate={this.quantityUpdate} user={this.state.user} chefInUse={this.state.chefInUse} /></div>
			)
	}
}


function mapStateToProps(state){
	return state;
};
export default connect(mapStateToProps)(Checking)