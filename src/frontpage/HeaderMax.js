import React, { Component } from 'react';
import '../style/App.css';
import MdShoppingCart from 'react-icons/lib/md/shopping-cart';
import SimpleForm from './autoComplete';
import ShoppingCart from './shoppingCart';
import {Link} from 'react-router-dom';

export default class HeaderMax extends Component{
	
	render(){
		return(
			<div className="myheader">
				<Link to="/"><img src="http://res.cloudinary.com/www-mybukka-com/image/upload/v1505151382/logo_m8ik1x.png" id="logo" alt="logo"/></Link>
				{(!this.props.user.isAuthenticated)? <div className="header-top-button">
																<button onClick={this.props.toggleSignin}>Sign In</button>
																<button className="btn-red" onClick={this.props.toggleSignUp} >Sign Up</button>
																{(this.props.Located)?
																		<div className='m-cart-not-signed-in'>
																			<MdShoppingCart className="shopping-cart"/>
																			<div className="m-cart-items">
																				<ShoppingCart   cart={this.props.cart} 
																			    		deleteCart={this.props.deleteCart} 
																			    		quantityUpdate={this.props.quantityUpdate} 
																			    		checkOut={this.props.checkOut} />
																			</div>
																		</div>:
																		null
																}
															</div>:
															(<div className="m-info">
																<div className="m-profile-photo-holder">
																	<div className="m-user-icon-holder">
																	<p className="m-name">{this.props.user.user.first_name+" "+this.props.user.user.last_name}</p>
																	<img src={this.props.user.user.profile_photo} alt="" className="m-profile-photo"/>
																	</div>
																	<div className="m-profile-options">
																		<Link to="/profile" className="lin m-options">Account</Link>
																		<a className="m-options" onClick={this.props.signout}>Log Out</a>
																	</div>
																</div>
																{(this.props.Located)?
																		 <div className='m-cart'>
																			<MdShoppingCart className="m-shopping-cart"/>
																			<div className="m-cart-items">
																				<ShoppingCart   cart={this.props.cart} 
																								deleteCart={this.props.deleteCart} 
																								quantityUpdate={this.props.quantityUpdate} 
																								checkOut={this.props.checkOut} />
																			</div>
																		</div>:
																		null
																}
															</div>)

														}
				<p id="search-text">Find the food that matches your taste around you</p>
				<div className="search-box">
				<SimpleForm chefResult={this.props.chefResult}/>
				</div>
			</div>
			)
	}
}