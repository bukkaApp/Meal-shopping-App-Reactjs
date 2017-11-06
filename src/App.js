import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './index.css';
import HeaderMax from './HeaderMax';
import HeaderMin from './HeaderMin';
import PageBackground from './PageBackground';
import Footer from './Footer';
import ScrollLogic from './ScrollLogic';
import ChefComponent from './chefComponent';
import MobileAppComponent from './mobileAppComponent';
import SummaryComponent from './summaryComponent';
import MenuPage from './menuPage';
import MenuItems from './menuItems';
import CheckoutPage from './checkoutPage';
import CheckoutSlip from './checkoutSlip';

class App extends Component {
	constructor(props) {
		super(props);
		this.state={
			address:'',
			searchResult:null,
			cart:{
				cart:{
							rice:{
								price:10.99,
								quantity:1,
								totalCost:10.99
							}
						},
						total:10.99
					},
			checkout:false
		}
		this.deleteCart=this.deleteCart.bind(this);
		this.quantityUpdate=this.quantityUpdate.bind(this);
		this.checkOut=this.checkOut.bind(this);
	}
	searchResultForParent=(result)=>{
		this.setState({searchResult:result});
		console.log(result);
	}
	addressForParent=async (adr)=>{
		await this.setState({address:adr});
	}
	updateCart=(cart)=>{
		this.setState({cart:cart})
		console.log(cart);
	}
	deleteCart=(food)=>{
		var newCart=this.state.cart.cart,cart={},total;
		delete newCart[food];
		cart.cart=newCart;
		total=Object.keys(newCart).map((key,i)=>newCart[key].totalCost).reduce((sum,value)=>sum+value,0).toFixed(2);
		cart.total=total;
		this.setState({cart:cart});
	}
	quantityUpdate=(Quantity,key)=>{
		var price=this.state.cart.cart[key].price,totalCost=price*Quantity,newCart=this.state.cart.cart,total,cart={};
		newCart[key].quantity=Quantity;
		newCart[key].totalCost=totalCost;
		total=Object.keys(newCart).map((key,i)=>newCart[key].totalCost).reduce((sum,value)=>sum+value,0).toFixed(2);
		cart.cart=newCart;
		cart.total=total;
		this.setState({cart:cart});
	}
	checkOut(){
		this.setState({checkout:true});
	}
	
  render() {
    return (
    	(this.state.checkout==true)? <div className="devi"><PageBackground/> <CheckoutPage/><CheckoutSlip cart={this.state.cart}/></div>:
    	(this.state.address=='')? <div className="dev"><ScrollLogic address={this.state.address} searchResultForParent={this.searchResultForParent} addressForParent={this.addressForParent} checkOut={this.checkOut} /><PageBackground /><SummaryComponent/><MobileAppComponent/><ChefComponent/><Footer/></div>:
    	<div className="dev"> <ScrollLogic address={this.state.address} searchResultForParent={this.searchResultForParent} addressForParent={this.addressForParent} cart={this.state.cart} deleteCart={this.deleteCart} quantityUpdate={this.quantityUpdate} checkOut={this.checkOut} /><MenuPage/><MenuItems updateCart={this.updateCart} /><Footer/></div>
    	);
  }
  /*render() {
    return (<div className="dev"><ScrollLogic address={this.state.address} searchResultForParent={this.searchResultForParent} addressForParent={this.addressForParent} /></div>)
	}*/
}

export default App;
