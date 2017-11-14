import React, { Component } from 'react';
import logo from '../logo.svg';
import '../style/menuPage.css'

export default class menuPage extends Component{
	render(){
		return (
				<div className="menuCont">
				<div className="imageHolder">
				<img src="https://res.cloudinary.com/bukka/image/upload/v1500737722/app/MENU-bg.jpg" id="menuPageLogo"/>
				<div className="chefDetailHolder">
					<h1>Veracios Pizza</h1>
				</div>
				</div>
				<ul className="menuHolder menuTop">
						<li><a href="">Appitizers</a></li>
						<li><a href="">salads</a></li>
						<li><a href="">Wing Zone</a></li>
						<li><a href="">Pizza</a></li>
						<li><a href="">Small Combination Pizzas</a></li>
						<li><a href="">Medium Combination Pizzas</a></li>
						<li><a href="">Large Combination Pizzas</a></li>
				</ul>
				</div>)
	}
}