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
import {connect} from 'react-redux';
import { fetch_address, fetch_chef, identify_user, get_chef,showsignIn,showsignUp,updating_user_info,signout,signup,update_cart} from '../data_Container/action/actions';
import fetch   from 'isomorphic-fetch';
import SignIn from '../authentication/signIn';
import SignUp from '../authentication/SignUp';
import axios from 'axios';
import '../homepage/Appstyle.css';
import Home from '../homepage/Home';
import Map from '../homepage/Map';
import Reg from '../homepage/Reg';



class App extends Component {
	constructor(props) {
		super(props);
		this.state={address:this.props.address,
					chef:this.props.chef,
					cart:this.props.cart,
					user:this.props.user,
					page:this.props.page,
					signup:this.props.SignUp
					};
		this.deleteCart=this.deleteCart.bind(this);
		this.quantityUpdate=this.quantityUpdate.bind(this);
		this.toggleSignin=this.toggleSignin.bind(this);
		this.toggleSignUp=this.toggleSignUp.bind(this);
		this.signin=this.signin.bind(this);
		this.signout=this.signout.bind(this);
		this.signup=this.signup.bind(this);
		this.updateCart=this.updateCart.bind(this);
		console.log(this.props.SignUp);
	}

	//togglepages
	toggleSignin(){
		this.props.dispatch(showsignIn(this.props.page.showsignIn))
	}
	toggleSignUp(){
		this.props.dispatch(showsignUp(this.props.page.showsignUp))
	}
	//signin and signup
	signin(email,password){
		this.props.dispatch(identify_user(axios.post("https://salty-escarpment-2400.herokuapp.com/api/v1/bukka/auth/custom/login",{email,password})))
		.then(()=>{this.props.dispatch(updating_user_info(axios.get("https://salty-escarpment-2400.herokuapp.com/api/v1/bukka/customer/card/"+this.props.user.user.uid)))})
		.then(()=>this.toggleSignin())
	}

	signup(email,firstname,lastname,password,mobile,isCustomer){
		this.props.dispatch(signup(axios.post("https://salty-escarpment-2400.herokuapp.com/api/v1/bukka/auth/register",{email,firstname,lastname,password,mobile,isCustomer})))
		.then(()=>{this.props.dispatch(identify_user(axios.post("https://salty-escarpment-2400.herokuapp.com/api/v1/bukka/auth/custom/login",{email,password})))})
		.then(()=>{this.props.dispatch(updating_user_info(axios.get("https://salty-escarpment-2400.herokuapp.com/api/v1/bukka/customer/card/"+this.props.user.user.uid)))})
		.then(()=>this.toggleSignUp())
	}
	//signout
	signout(){
		this.props.dispatch(signout());
	}
	//updatecart
	updateCart=(cart)=>{
		this.props.dispatch(update_cart(cart));
	}
	
	//deleteCartItem
	deleteCart=(food)=>{
		var newCart=this.props.cart.cart;
		delete newCart[food];
		var cart={};
		cart.cart=newCart;
		var total=Object.keys(newCart).map((key,i)=>newCart[key].totalCost).reduce((sum,value)=>sum+value,0).toFixed(2);
		cart.total=total;
		this.updateCart(cart);
	}
	//quantityUpdate
	quantityUpdate=(Quantity,key)=>{
		var price=this.props.cart.cart[key].price,totalCost=price*Quantity,newCart=this.props.cart.cart,cart={};
		newCart[key].quantity=Quantity;
		newCart[key].totalCost=totalCost;
		var total=Object.keys(newCart).map((key,i)=>newCart[key].totalCost).reduce((sum,value)=>sum+value,0).toFixed(2);
		cart.cart=newCart;
		cart.total=total;
		this.updateCart(cart);
	}
  render() {
    return (
    	(!this.props.chef.fetched)? <div className="dev">
    											<ScrollLogic address={this.props.address.Location} 
    														 chef={this.props.chef}
    														 toggleSignin={this.toggleSignin}
    														 toggleSignUp={this.toggleSignUp}
    														 deleteCart={this.deleteCart} 
    				 										 quantityUpdate={this.quantityUpdate}
    														 user={this.props.user}
    														 signout={this.signout}
    														 cart={this.props.cart} />
    											<PageBackground />
    											<SummaryComponent/>
    											<MobileAppComponent/>
    											<ChefComponent/>
    											<Footer/>
    											{(this.props.page.showsignIn)? <SignIn newUser={this.props.newUser} 
    																				   toggleSignin={this.toggleSignin} 
    																				   toggleSignUp={this.toggleSignUp}
    																				   signin={this.signin}
    																				   user={this.props.user}/>:null}
												{(this.props.page.showsignUp)? <SignUp newUser={this.props.newUser} 
																					   toggleSignUp={this.toggleSignUp} 
																					   toggleSignin={this.toggleSignin}
																					   signup={this.signup}
																					   SignUp={this.props.SignUp}
																					   user={this.props.user}/>:null}
    											</div>:
    	<div className="dev"> 
    	<ScrollLogic address={this.props.address.Location}
    				 Located={this.props.address.Located} 
    				 chef={this.props.chef} 
    				 deleteCart={this.deleteCart} 
    				 quantityUpdate={this.quantityUpdate} 
    				 toggleSignin={this.toggleSignin}
    				 toggleSignUp={this.toggleSignUp}
    				 user={this.props.user}
    				 signout={this.signout}
    				 cart={this.props.cart}/>
    	<MenuPage chef={this.props.chef}/>
    	<MenuItems updateCart={this.updateCart} 
    			   chef={this.props.chef} />
   		<Footer/>
   		{(this.props.page.showsignIn)? <SignIn toggleSignin={this.toggleSignin}
   											   toggleSignUp={this.toggleSignUp}
   											   signin={this.signin}
   											   user={this.props.user} /> :null}

		{(this.props.page.showsignUp)? <SignUp  toggleSignUp={this.toggleSignUp}
											    toggleSignin={this.toggleSignin}
											    signup={this.signup}
											    SignUp={this.props.SignUp}
											    user={this.props.user} />:null}
   		</div>
    	);
  }
};

function mapStateToProps(state){
	return state;
};
export default connect(mapStateToProps)(App);
