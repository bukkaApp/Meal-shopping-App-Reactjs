import React, { Component } from 'react';
import logo from '../logo.svg';
import '../style/App.css';
import MdShoppingCart from 'react-icons/lib/md/shopping-cart';
import SimpleForm from './autoComplete';

export default class HeaderMax extends Component{
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
			<div className="myheader">
				<img src="http://res.cloudinary.com/www-mybukka-com/image/upload/v1505151382/logo_m8ik1x.png" id="logo" alt="logo"/>
				<div className="header-top-button">
				<button ></button>
				<button className="btn-red"></button>
				<MdShoppingCart className="shopping-cart"/>
				</div>
				<p id="search-text">Find the food that matches your taste around you</p>
				<div className="search-box">
				<SimpleForm searchResultForParent={this.searchResultForParent} addressForParent={this.addressForParent} address={this.state.address} > </SimpleForm>
				</div>
			</div>
			)
	}
}