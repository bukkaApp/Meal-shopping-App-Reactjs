import React, { Component } from 'react';
import logo from '../logo.svg';
import '../style/profile.css';
import Paymentinfo from '../profile/paymentinformation';
import Orderhistory from '../profile/orderhistory';
import Notification from '../profile/Notification';
import Basicinformation from '../profile/BasicInformation'
import HeaderMin from '../frontpage/HeaderMin';
import {connect} from 'react-redux';
import { fetch_address, fetch_chef, identify_user, get_chef,showsignIn,showsignUp,updating_user_info,signout,addcard,orderhistory} from '../data_Container/action/actions';
import SignIn from '../authentication/signIn';
import SignUp from '../authentication/SignUp';
import axios from 'axios';

 class profile extends Component{
	constructor(props) {
		super(props);
		this.state={
			showpaymentinfo:false,
			showorderhistory:false,
			shownotification:false,
			showbasicinformation:true,
			address:this.props.address,
			chef:this.props.chef,
			cart:this.props.cart,
			user:this.props.user,
			page:this.props.page
		};
		this.showorderhistory=this.showorderhistory.bind(this);
		this.showbasicinformation=this.showbasicinformation.bind(this);
		this.shownotification=this.shownotification.bind(this);
		this.showpaymentinfo=this.showpaymentinfo.bind(this);
		this.addcard=this.addcard.bind(this);
		this.signout=this.signout.bind(this);
		this.orderhistory=this.orderhistory.bind(this);
	}
	showpaymentinfo(e){
		this.setState({
			showpaymentinfo:!this.state.showpaymentinfo,
			showorderhistory:false,
			shownotification:false,
			showbasicinformation:false
		});
		var menuItem=document.getElementsByClassName("l-menu-item");
		for(var i=0;i<menuItem.length;i++){
			if(menuItem[i].classList.contains('l-menu-item')){
				menuItem[i].classList.remove("l-select");
			}
		}
		document.getElementById(e.target.dataset.key).classList.add("l-select");
	}
	shownotification(e){
		this.setState({
			showpaymentinfo:false,
			showorderhistory:false,
			shownotification:!this.state.shownotification,
			showbasicinformation:false
		});
		var menuItem=document.getElementsByClassName("l-menu-item");
		for(var i=0;i<menuItem.length;i++){
			if(menuItem[i].classList.contains('l-menu-item')){
				menuItem[i].classList.remove("l-select");
			}
		}
		document.getElementById(e.target.dataset.key).classList.add("l-select");
	}
	showbasicinformation(e){
		this.setState({
			showpaymentinfo:false,
			showorderhistory:false,
			shownotification:false,
			showbasicinformation:!this.state.showbasicinformation
		});
		var menuItem=document.getElementsByClassName("l-menu-item");
		for(var i=0;i<menuItem.length;i++){
			if(menuItem[i].classList.contains('l-menu-item')){
				menuItem[i].classList.remove("l-select");
			}
		}
		document.getElementById(e.target.dataset.key).classList.add("l-select");
	}
	showorderhistory(e){
		this.setState({
			showpaymentinfo:false,
			showorderhistory:!this.state.showorderhistory,
			shownotification:false,
			showbasicinformation:false
		});
		var menuItem=document.getElementsByClassName("l-menu-item");
		for(var i=0;i<menuItem.length;i++){
			if(menuItem[i].classList.contains('l-menu-item')){
				menuItem[i].classList.remove("l-select");
			}
		}
		document.getElementById(e.target.dataset.key).classList.add("l-select")
	}
	//signout
	signout(){
		this.props.dispatch(signout());
	}
	//addcard
	addcard(cardNumber,ccv,expirationMonth,expirationYear){
		var uid=this.props.user.user.uid;
		var token=this.props.user.user.token;
		var email=this.props.user.user.email;
		var url="https://salty-escarpment-2400.herokuapp.com/api/v1/bukka/customer/cardDetails/"+ uid;
		this.props.dispatch(addcard(axios({ method: 'post',url: url,headers:{token,uid},data:{email,cardNumber,ccv,expirationMonth,expirationYear}})))
		.then(()=>this.signout())
	}
	//OrderHistory
	orderhistory(){
		var uid=this.props.user.user.uid;
		var token=this.props.user.user.token;
		var url="https://salty-escarpment-2400.herokuapp.com/api/v1/bukka/customer/orders/"+ uid;
		this.props.dispatch(orderhistory(axios({method: 'get',url: url,headers:{token,uid}})));
	}
	render(){
		return(
			<div className="l-profilepage l-grey-background">
			<HeaderMin  toggleSignin={this.props.toggleSignin} 
                                                toggleSignUp={this.props.toggleSignUp}
                                                user={this.props.user}
                                                signout={this.signout}
                                                cart={this.props.cart} />
			<h3 className="l-space-around l-headeri">Manage Account</h3>
			<ul className="l-menu l-right-padding l-white-background l-height l-menu-border">
				<li className="l-menu-item l-select" data-key="menuItem-one" id="menuItem-one" onClick={this.showbasicinformation}>Profile</li>
				<li className="l-menu-item" data-key="menuItem-two" id="menuItem-two" onClick={this.showorderhistory}>Order History</li>
				<li className="l-menu-item" data-key="menuItem-three" id="menuItem-three" onClick={this.showpaymentinfo} >Payment Information</li>
				<li className="l-menu-item" data-key="menuItem-four" id="menuItem-four" onClick={this.shownotification}>Notification Settings</li>
			</ul>
			{(this.state.showpaymentinfo)? <Paymentinfo addcard={this.addcard} 
														user={this.props.user} />:null}
			{(this.state.showbasicinformation)? <Basicinformation/>:null}
			{(this.state.showorderhistory)? <Orderhistory 	orderhistory={this.orderhistory} 
															userstore={this.props.user}/>:null}
			{(this.state.shownotification)? <Notification/>:null}
			</div>
			)
	}
}

const mapStateToProps=(state)=>{
	return state;
};

export default connect(mapStateToProps)(profile);