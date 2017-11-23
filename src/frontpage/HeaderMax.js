import React, { Component } from 'react';
import logo from '../logo.svg';
import '../style/App.css';
import MdShoppingCart from 'react-icons/lib/md/shopping-cart';
import SimpleForm from './autoComplete';
import ShoppingCart from './shoppingCart';
import {Link} from 'react-router-dom';

export default class HeaderMax extends Component{
	constructor(props) {
		super(props);
	}
	
	render(){
		return(
			<div className="myheader">
				<img src="http://res.cloudinary.com/www-mybukka-com/image/upload/v1505151382/logo_m8ik1x.png" id="logo" alt="logo"/>
				{(this.props.user.user.uid==undefined)? <div className="header-top-button">
																<button onClick={this.props.toggleSignin}>Sign In</button>
																<button className="btn-red" onClick={this.props.toggleSignUp} >Sign Up</button>
																<div className='m-cart-not-signed-in'>
																	<MdShoppingCart className="shopping-cart"/>
																	<div className="m-cart-items">
																		<ShoppingCart   cart={this.props.cart} 
																			    		deleteCart={this.props.deleteCart} 
																			    		quantityUpdate={this.props.quantityUpdate} 
																			    		checkOut={this.props.checkOut} />
																	</div>
																</div>
															</div>:
															(<div className="m-info">
																<div className="m-profile-photo-holder">
																	<div className="m-user-icon-holder">
																	<p className="m-name">{this.props.user.user.first_name+" "+this.props.user.user.last_name}</p>
																	<img src={this.props.user.user.profile_photo} alt="" className="m-profile-photo"/>
																	</div>
																	<div className="m-profile-options">
																		<Link to="/profile" className="lin" className="m-options">Account</Link>
																		<a className="m-options" onClick={this.props.signout}>Log Out</a>
																	</div>
																</div>
																<div className='m-cart'>
																	<MdShoppingCart className="m-shopping-cart"/>
																	<div className="m-cart-items">
																		<ShoppingCart   cart={this.props.cart} 
																			    		deleteCart={this.props.deleteCart} 
																			    		quantityUpdate={this.props.quantityUpdate} 
																			    		checkOut={this.props.checkOut} />
																	</div>
																</div>
															</div>)

														}
				<p id="search-text">Find the food that matches your taste around you</p>
				<div className="search-box">
				<SimpleForm > </SimpleForm>
				</div>
			</div>
			)
	}
}