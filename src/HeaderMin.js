import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MdShoppingCart from 'react-icons/lib/md/shopping-cart'

export default class HeaderMin extends Component{
	render(){
		return(
			<div  className="myheader header-min">
				<img src="http://res.cloudinary.com/www-mybukka-com/image/upload/v1505151382/logo_m8ik1x.png" id="logo" alt="logo"/>
				<div className="search-box search-box-min">
				<input type='text' />
				<button className="btn-sml btn-red"></button>
				</div>
				<div className="header-top-button header-top-button-min">
				<button ></button>
				<button className="btn-red"></button>
				<MdShoppingCart className="shopping-cart"/>
				</div>
			</div>
			)
	}
}