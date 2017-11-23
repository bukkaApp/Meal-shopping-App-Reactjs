import React, { Component } from 'react';
import logo from '../logo.svg';
import '../style/signIn.css';
import fetch from 'isomorphic-fetch';

export default class SignUp extends Component{
	constructor(props){
		super(props);
		this.signup=this.signup.bind(this);
	}

	signup(){
		if(document.getElementById("Passwordi").value !== document.getElementById("ConfirmPasswordi").value){
			console.log("password is not the same as confirm password!")
		}
		else{
		var email=document.getElementById("emaili").value;
		var firstname=document.getElementById("FirstNamei").value
		var lastname=document.getElementById("LastNamei").value
		var password=document.getElementById("Passwordi").value
		var mobile=document.getElementById("MobileNumberi").value
		var isCustomer=true;
		this.props.signup(email,firstname,lastname,password,mobile,isCustomer);
	}
}

	render(){
		return(
			<div className="signInPopup">
				<div className="SignUpPopupHolder">
					<div id="topPart">
						<p>Sign Up</p>
						<a onClick={this.props.toggleSignUp}>X</a>
					</div>
					<div className="formField">
						<input placeholder="First Name" type="text" id="FirstNamei"/>
						<input placeholder="Last Name" type="text" id="LastNamei"/>
						<input placeholder="Mobile Number" type="tel" id="MobileNumberi"/>
						<input placeholder="Email" type="email" id="emaili"/>
						<input placeholder="Password" type="password" id="Passwordi"/>
						<input placeholder="Confirm Password" type="password" id="ConfirmPasswordi"/>
						<button className="btn-red" onClick={this.signup}>Sign Up</button>
						<p>Already a User<a id="sign-btn" onClick={this.props.toggleSignin}>Sign In</a></p>
					</div>

				</div>
			</div>
			)
	}
}