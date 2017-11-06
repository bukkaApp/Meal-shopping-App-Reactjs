import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './headerStories.css';
import MdShoppingCart from 'react-icons/lib/md/shopping-cart';
import SimpleForm from './autoComplete';
import ShoppingCart from './shoppingCart';


export default class headerStories extends Component{
	constructor(props) {
		super(props);
		this.state={
			address:this.props.address
		}
	}
	searchResultForParent=(result)=>{
		this.props.searchResultForParent(result);
	}
	addressForParent=(adr)=>{
		this.props.addressForParent(adr);
	}
	render(){
		return(
				<div  className="myheader header-min bigMenuHolder">
				<img src="http://res.cloudinary.com/www-mybukka-com/image/upload/v1505151382/logo_m8ik1x.png" id="logo" alt="logo"/>
				<div className="search-box search-box-min search">
				<SimpleForm searchResultForParent={this.searchResultForParent} addressForParent={this.addressForParent} address={this.state.address} > </SimpleForm>
				</div>
				<div className="header-top-button header-top-button-min head-option">
				<button ></button>
				<button className="btn-red"></button>
				<MdShoppingCart className="shopping-cart"/>
				</div>
				<div className="divider"></div>
				<ul className="menuHolder">
						<li><a href="">Appitizers</a></li>
						<li><a href="">salads</a></li>
						<li><a href="">Wing Zone</a></li>
						<li><a href="">Pizza</a></li>
						<li><a href="">Small Combination Pizzas</a></li>
						<li><a href="">Medium Combination Pizzas</a></li>
						<li><a href="">Large Combination Pizzas</a></li>
				</ul>
				<ShoppingCart cart={this.props.cart} deleteCart={this.props.deleteCart} quantityUpdate={this.props.quantityUpdate} checkOut={this.props.checkOut} />
			</div>
				)
	}
}