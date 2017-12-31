
import React, { Component } from 'react';
import '../style/App.css';
import MdShoppingCart from 'react-icons/lib/md/shopping-cart';
import SimpleForm from './autoComplete';
import ShoppingCart from './shoppingCart';
import {Link} from 'react-router-dom';

export default class HeaderMax extends Component{
	
	render(){
		return(
			<div className="myheader ab">
				<Link to="/"><img src="http://res.cloudinary.com/www-mybukka-com/image/upload/v1505151382/logo_m8ik1x.png" id="logo" alt="logo"/></Link>
				{(!this.props.user.isAuthenticated)? <div className="header-top-button">
																<button className="max-sign-in" onClick={this.props.toggleSignin}>Sign In</button>
																<button className="btn-red max-sign-up" onClick={this.props.toggleSignUp} >Sign Up</button>
																
															</div>:
															(<div className=" m-info small-head">
															<div className="m-profile-photo-holder hh">
																<div className="m-user-icon-holder display-toggle">
																<img src={this.props.user.user.profile_photo} alt="" className="m-profile-photo"/>
																</div>
																<div className="m-profile-options display-toggle">
																	<Link to="/profile" className="lin m-options" >Account</Link>
																	<a className="m-options" onClick={this.props.signout}>Log Out</a>
																</div>
															</div>
																
															</div>)

														}
				<p id="search-text"><b>Find the food that matches your taste around you</b></p>
				<div className="search-box max-search fdp">
				<SimpleForm chefResult={this.props.chefResult}/>
				</div>
			</div>
			)
	}
}