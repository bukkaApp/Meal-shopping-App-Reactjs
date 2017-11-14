import React, { Component } from 'react';
import logo from '../logo.svg';
import '../style/profile.css';
import Paymentinfo from '../profile/paymentinformation';
import Orderhistory from '../profile/orderhistory';
import Notification from '../profile/Notification';
import Basicinformation from '../profile/BasicInformation'

export default class profile extends Component{
	constructor(props) {
		super(props);
		this.state={
			showpaymentinfo:false,
			showorderhistory:false,
			shownotification:false,
			showbasicinformation:true
		};
		this.showorderhistory=this.showorderhistory.bind(this);
		this.showbasicinformation=this.showbasicinformation.bind(this);
		this.shownotification=this.shownotification.bind(this);
		this.showpaymentinfo=this.showpaymentinfo.bind(this);
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

	render(){
		return(
			<div className="l-profilepage l-grey-background">
			<h3 className="l-space-around">Manage Account</h3>
			<ul className="l-menu l-right-padding l-white-background l-height l-menu-border">
				<li className="l-menu-item l-select" data-key="menuItem-one" id="menuItem-one" onClick={this.showbasicinformation}>Profile</li>
				<li className="l-menu-item" data-key="menuItem-two" id="menuItem-two" onClick={this.showorderhistory}>Order History</li>
				<li className="l-menu-item" data-key="menuItem-three" id="menuItem-three" onClick={this.showpaymentinfo} >Payment Information</li>
				<li className="l-menu-item" data-key="menuItem-four" id="menuItem-four" onClick={this.shownotification}>Notification Settings</li>
			</ul>
			{(this.state.showpaymentinfo)? <Paymentinfo/>:null}
			{(this.state.showbasicinformation)? <Basicinformation/>:null}
			{(this.state.showorderhistory)? <Orderhistory/>:null}
			{(this.state.shownotification)? <Notification/>:null}
			</div>
			)
	}
}