import React, { Component } from 'react';
import logo from '../logo.svg';
import '../style/App.css';
import '../style/index.css';
import PageBackground from '../frontpage/PageBackground';
import Footer from '../frontpage/Footer';
import ScrollLogic from '../frontpage/ScrollLogic';
import ChefComponent from '../frontpage/chefComponent';
import MobileAppComponent from '../frontpage/mobileAppComponent';
import SummaryComponent from '../frontpage/summaryComponent';
import MenuPage from '../menu/menuPage';
import MenuItems from '../menu/menuItems';
import CheckoutPage from '../checkout/checkoutPage';
import CheckoutSlip from '../checkout/checkoutSlip';

class App extends Component {
	constructor(props) {
		super(props);
		this.state={
			address:'',
			chef:null,
			chefInUse:null,
			chefInUseReady:false,
			cart:{
				cart:{
						},
				total:0.00
					},
			user:null,
			checkout:false
		}
		this.deleteCart=this.deleteCart.bind(this);
		this.quantityUpdate=this.quantityUpdate.bind(this);
		this.checkOut=this.checkOut.bind(this);
		this.newUser=this.newUser.bind(this);
		console.log("the state is",this.state)
	}
	searchResultForParent=(result)=>{
		this.setState({chef:result,chefInUse:result.filter((chef)=>chef.role==="Super Chef")[0],chefInUseReady:true});
		console.log(this.state.chefInUse);
	}
	addressForParent=async (adr)=>{
		await this.setState({address:adr});
	}
	updateCart=(cart)=>{
		this.setState({cart:cart})
		console.log(cart);
	}
	newUser(e,lastCardDigits){
		this.setState({user:{...e,lastCardDigits}})
		console.log({...e,lastCardDigits})
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
    	(this.state.checkout==true)? <div className="devi"><PageBackground/> <CheckoutPage newUser={this.newUser} user={this.state.user} /> <CheckoutSlip cart={this.state.cart} user={this.state.user} address={this.state.address} deleteCart={this.deleteCart} quantityUpdate={this.quantityUpdate} user={this.state.user} chefInUse={this.state.chefInUse} /></div>:
    	(this.state.address=='')? <div className="dev"><ScrollLogic address={this.state.address} chef={this.state.chef} searchResultForParent={this.searchResultForParent} addressForParent={this.addressForParent} checkOut={this.checkOut} /><PageBackground /><SummaryComponent/><MobileAppComponent/><ChefComponent/><Footer/></div>:
    	<div className="dev"> <ScrollLogic address={this.state.address} searchResultForParent={this.searchResultForParent} chef={this.state.chef} addressForParent={this.addressForParent} cart={this.state.cart} deleteCart={this.deleteCart} quantityUpdate={this.quantityUpdate} checkOut={this.checkOut} checkchef={this.state.chefInUseReady}/><MenuPage/><MenuItems updateCart={this.updateCart} chef={this.state.chef} chefInUse={this.state.chefInUse} /><Footer/></div>
    	);
  }
  /*render() {
    return (<div className="dev"><ScrollLogic address={this.state.address} searchResultForParent={this.searchResultForParent} addressForParent={this.addressForParent} /></div>)
	}*/
}

export default App;
