import React, { Component } from 'react';
import '../style/App.css';
import MdShoppingCart from 'react-icons/lib/md/shopping-cart';
import SimpleForm from './autoComplete';
import ShoppingCart from './shoppingCart';
import {Link} from 'react-router-dom';


export default class HeaderMin extends Component{
	render(){
		return(
			<div  className="myheader header-min">
				<Link to="/"><img src="http://res.cloudinary.com/www-mybukka-com/image/upload/v1505151382/logo_m8ik1x.png" id="logo" alt="logo"/></Link>
				<div className="search-box search-box-min">
				<SimpleForm> </SimpleForm>
				</div>
				{(!this.props.user.isAuthenticated)? <div className="header-top-button header-top-button-min">
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
																		<Link to="/profile" className="lin m-options" >Account</Link>
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

			</div>
			)
	}
}
