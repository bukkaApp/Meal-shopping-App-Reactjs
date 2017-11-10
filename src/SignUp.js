import React, { Component } from 'react';
import logo from './logo.svg';
import './signIn.css';
import fetch from 'isomorphic-fetch';

export default class SignUp extends Component{
	constructor(props){
		super(props);
		this.userSignup=this.userSignup.bind(this);
	}

	async userSignup(){
		if(document.getElementById("Password").value != document.getElementById("ConfirmPassword").value){

		}
		else{
		try{
			//signing user up
		var email=document.getElementById("email").value,firstname=document.getElementById("FirstName").value,lastname=document.getElementById("LastName").value,password=document.getElementById("Password").value,mobile=document.getElementById("MobileNumber").value,url="http://salty-escarpment-2400.herokuapp.com/api/v1/bukka/auth/register",isCustomer=true;
		var fetchurl= await fetch(url,{
			method:'post',
			headers:{
    					'Content-Type': 'application/json'
			},
			body:JSON.stringify({email,firstname,lastname,password,mobile,isCustomer})
		});
		var response= await fetchurl.json();
		console.log(response);
		//signing user in after successful signup
		try{
		var email=document.getElementById("email").value,password=document.getElementById("Password").value,url="http://salty-escarpment-2400.herokuapp.com/api/v1/bukka/auth/custom/login";
		var fetchedurl= await fetch(url,{
			method:'post',
			headers: {
    					'Accept': 'application/json',
    					'Content-Type': 'application/json'
  					},
			body:JSON.stringify({email,password})
		});
		var response2= await fetchedurl.json();
		console.log(response2);
		this.props.newUser(response);
  		this.props.toggleSignUp();
  	}
  	catch(error){
  		console.log(error);
  	}
  		}
  		catch(error){
  			console.log("Sorry!!",error);
  		}
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
						<input placeholder="First Name" type="text" id="FirstName"/>
						<input placeholder="Last Name" type="text" id="LastName"/>
						<input placeholder="Mobile Number" type="tel" id="MobileNumber"/>
						<input placeholder="Email" type="email" id="email"/>
						<input placeholder="Password" type="password" id="Password"/>
						<input placeholder="Confirm Password" type="password" id="ConfirmPassword"/>
						<button className="btn-red" onClick={this.userSignup}>Sign Up</button>
						<p>Already a User<a id="sign-btn">Sign In</a></p>
					</div>

				</div>
			</div>
			)
	}
}