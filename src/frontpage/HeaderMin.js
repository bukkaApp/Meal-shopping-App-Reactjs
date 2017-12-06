import React, { Component } from 'react';
import '../style/App.css';
import MdShoppingCart from 'react-icons/lib/md/shopping-cart';
import SimpleForm from './autoComplete';
import ShoppingCart from './shoppingCart';
import {Link} from 'react-router-dom';
import { ButtonToolbar,DropdownButton,MenuItem} from 'react-bootstrap';


export default class HeaderMin extends Component{
	constructor(Props){
		super(Props)
		console.log(this.props.Located)
	}
	render(){
		return(
			<div  className="myheader header-min">
				<Link to="/"><img src="http://res.cloudinary.com/www-mybukka-com/image/upload/v1505151382/logo_m8ik1x.png" id="logo" alt="logo"/></Link>
				<div className="search-box search-box-min">
				<SimpleForm> </SimpleForm>
				</div>
				{(!this.props.user.isAuthenticated)? <div className=" header-top-button header-top-button-min ">
																<button onClick={this.props.toggleSignin} className="display-toggle">Sign In</button>
																<button className="btn-red display-toggle" onClick={this.props.toggleSignUp} >Sign Up</button>
																{(this.props.Located)?
																				<div className='m-cart-not-signed-in display-toggle'>
																					<MdShoppingCart className="shopping-cart display-toggle"/>
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
															(<div className=" m-info ">
																<div className="m-profile-photo-holder ">
																	<div className="m-user-icon-holder display-toggle">
																	<p className="m-name">{this.props.user.user.first_name+" "+this.props.user.user.last_name}</p>
																	<img src={this.props.user.user.profile_photo} alt="" className="m-profile-photo"/>
																	</div>
																	<div className="m-profile-options display-toggle">
																		<Link to="/profile" className="lin m-options" >Account</Link>
																		<a className="m-options" onClick={this.props.signout}>Log Out</a>
																	</div>
																</div>
																{(this.props.Located)?
																<div className='m-cart display-toggle'>
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

			</div>
			)
	}
}
