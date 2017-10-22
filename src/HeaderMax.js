import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MdShoppingCart from 'react-icons/lib/md/shopping-cart';

export default class HeaderMax extends Component{
	render(){
		return(
			<div  className="myheader">
				<img src="http://res.cloudinary.com/www-mybukka-com/image/upload/v1505151382/logo_m8ik1x.png" id="logo" alt="logo"/>
				<div className="header-top-button">
				<button ></button>
				<button className="btn-red"></button>
				<MdShoppingCart className="shopping-cart"/>
				</div>
				<p id="search-text">Find the food that matches your taste around you</p>
				<div className="search-box">
				<input type='text' />
				<button className="btn-sml btn-red"></button>
				</div>
			</div>
			)
	}
}