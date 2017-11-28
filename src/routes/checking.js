import React, { Component } from 'react';
import logo from '../logo.svg';
import '../style/App.css';
import '../style/index.css';
import PageBackground from '../frontpage/PageBackground';
import CheckoutPage from '../checkout/checkoutPage';
import CheckoutSlip from '../checkout/checkoutSlip';
import {connect} from 'react-redux';
import HeaderCheckout from '../frontpage/HeaderCheckout';
import { fetch_address, fetch_chef, identify_user, get_chef,showsignIn,showsignUp,updating_user_info,signout,signup,update_cart,showaddCard,addcard} from '../data_Container/action/actions';
import SignIn from '../authentication/signIn';
import SignUp from '../authentication/SignUp';
import axios from 'axios';
import AddCard from '../checkout/addCard';

class Checking extends Component{
	constructor(props){
		super(props);
		//this.newUser=this.newUser.bind(this);
		this.deleteCart=this.deleteCart.bind(this);
		this.quantityUpdate=this.quantityUpdate.bind(this);
		this.toggleSignin=this.toggleSignin.bind(this);
		this.toggleSignUp=this.toggleSignUp.bind(this);
		this.signin=this.signin.bind(this);
		this.signout=this.signout.bind(this);
		this.signup=this.signup.bind(this);
		this.updateCart=this.updateCart.bind(this);
		this.toggleShowcard=this.toggleShowcard.bind(this);
		this.addcard=this.addcard.bind(this);

	}
	//togglepages
	toggleSignin(){
		this.props.dispatch(showsignIn(this.props.page.showsignIn))
	}
	toggleSignUp(){
		this.props.dispatch(showsignUp(this.props.page.showsignUp))
	}
	toggleShowcard(){
		this.props.dispatch(showaddCard(this.props.page.showaddCard))
	}
	//addcard
	addcard(cardNumber,ccv,expirationMonth,expirationYear){
		var uid=this.props.user.user.uid;
		var token=this.props.user.user.token;
		var email=this.props.user.user.email;
		var url="http://salty-escarpment-2400.herokuapp.com/api/v1/bukka/customer/cardDetails/"+ uid;
		this.props.dispatch(addcard(axios({ method: 'post',url: url,headers:{token,uid},data:{email,cardNumber,ccv,expirationMonth,expirationYear}})))
		.then(()=>this.signout())
		.then(()=>this.toggleShowcard())
	}
	//signin and signup
	signin(email,password){
		this.props.dispatch(identify_user(axios.post("http://salty-escarpment-2400.herokuapp.com/api/v1/bukka/auth/custom/login",{email,password})))
		.then(()=>{this.props.dispatch(updating_user_info(axios.get("http://salty-escarpment-2400.herokuapp.com/api/v1/bukka/customer/card/"+this.props.user.user.uid)))})
		.then(()=>this.toggleSignin())
	}

	signup(email,firstname,lastname,password,mobile,isCustomer){
		this.props.dispatch(signup(axios.post("http://salty-escarpment-2400.herokuapp.com/api/v1/bukka/auth/register",{email,firstname,lastname,password,mobile,isCustomer})))
		.then(()=>{this.props.dispatch(identify_user(axios.post("http://salty-escarpment-2400.herokuapp.com/api/v1/bukka/auth/custom/login",{email,password})))})
		.then(()=>{this.props.dispatch(updating_user_info(axios.get("http://salty-escarpment-2400.herokuapp.com/api/v1/bukka/customer/card/"+this.props.user.user.uid)))})
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
	//placeorder
	placeorder=(transaction,token,uid,url)=>{
		axios({ method: 'post',url: url,headers:{token,uid},body:{transaction:transaction}})
		.then((r)=>console.log(r))
		.catch((e)=>console.log("it is me!!!",e))
	}
	render(){
		return(
			<div className="devi">
				<HeaderCheckout 	user={this.props.user}
                            		signout={this.signout}
                            		cart={this.props.cart} />
				<PageBackground/> 
				<CheckoutPage 	newUser={this.newUser} 
							  	user={this.props.user}
							  	address={this.props.address}
							  	toggleSignin={this.toggleSignin}
							  	toggleSignUp={this.toggleSignUp}
							  	toggleshowaddcard={this.toggleShowcard} /> 
				<CheckoutSlip 	cart={this.props.cart}
								user={this.props.user} 
								chef={this.props.chef}
								address={this.props.address} 
								deleteCart={this.deleteCart} 
								quantityUpdate={this.quantityUpdate}
								placeorder={this.placeorder} />
				{(this.props.page.showsignIn)? <SignIn  toggleSignin={this.toggleSignin}
   											   			toggleSignUp={this.toggleSignUp}
   											   			signin={this.signin}
   											   			user={this.props.user}/>:null}
   											   			
				{(this.props.page.showsignUp)? <SignUp  toggleSignUp={this.toggleSignUp}
											    		toggleSignin={this.toggleSignin}
											    		signup={this.signup}
											    		SignUp={this.props.SignUp}
											    		user={this.props.user}/>:null}
				{(this.props.page.showaddCard)? <AddCard 	addCard={this.addcard} 
															user={this.props.user}
															toggleshowaddcard={this.toggleShowcard}/>:null}
			</div>
			)
	}
}


function mapStateToProps(state){
	return state;
};
export default connect(mapStateToProps)(Checking)