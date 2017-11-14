import React, { Component } from 'react';
import logo from '../logo.svg';
import '../style/signIn.css';
import fetch    from 'isomorphic-fetch';

export default class signIn extends Component{
	constructor(props){
		super(props);
		this.getUser=this.getUser.bind(this);
	}
	userdetails(){

	}
	async getUser(){
		try{
		var email=document.getElementById("SignInemail").value,password=document.getElementById("SignInPassword").value,url="http://salty-escarpment-2400.herokuapp.com/api/v1/bukka/auth/custom/login";
		var fetchedurl= await fetch(url,{
			method:'post',
			headers: {
    					'Accept': 'application/json',
    					'Content-Type': 'application/json'
  					},
			body:JSON.stringify({email,password})
		});
		var response= await fetchedurl.json();
		var userUID=response.data.uid;
		var apiURL="http://salty-escarpment-2400.herokuapp.com/api/v1/bukka/customer/card/"+userUID;
		var getLastDigits=await fetch(apiURL);
		var getLastDigitsResponse=await getLastDigits.json();
		if (getLastDigitsResponse.data){
		var last=getLastDigitsResponse.data.last;
		this.props.newUser(response,last);
		}
		else{
			this.props.newUser(response);
		}
  		this.props.toggleSignin();
  	}
  	catch(error){
  		console.log(error);
  	}
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
						<p>New User<a id="sign-btn">Sign Up</a></p>
					</div>
				</div>
			</div>
			)
	}
}