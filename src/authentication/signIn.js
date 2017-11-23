import React, { Component } from 'react';
import logo from '../logo.svg';
import '../style/signIn.css';
import fetch    from 'isomorphic-fetch';

export default class signIn extends Component{
	constructor(props){
		super(props);
		this.getUser=this.getUser.bind(this);
	}
	getUser(){
  	var email=document.getElementById("SignInemail").value,password=document.getElementById("SignInPassword").value;
  	this.props.signin(email,password);
	}

	render(){
		return(
			<div className="signInPopup">
				<div className="popupHolder">
					<div id="topPart">
						<p>Login</p>
						<a onClick={this.props.toggleSignin}>X</a>
					</div>
					<div className="formField">
						<input placeholder="Email" id="SignInemail"/>
						<input placeholder="Password" type="password" id="SignInPassword"/>
						<a>Forgot Password?</a>
						<button className="btn-red" onClick={this.getUser}>Sign In</button>
						<p>New User<a id="sign-btn" onClick={this.props.toggleSignUp}>Sign Up</a></p>
					</div>
				</div>
			</div>
			)
	}
}