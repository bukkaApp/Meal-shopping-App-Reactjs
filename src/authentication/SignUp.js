import React, { Component } from 'react';
import '../style/signIn.css';
import Faspinner from 'react-icons/lib/fa/spinner';
import lib from '../util/lib'
import propTypes from 'prop-types'

export default class SignUp extends Component{
	constructor(props){
		super(props);
	}

	signup(){
		if(document.getElementById("Passwordi").value !== document.getElementById("ConfirmPasswordi").value){
			console.log("password is not the same as confirm password!")
		}
		else{
		var email=document.getElementById("emaili").value,
		firstname=document.getElementById("FirstNamei").value,
		lastname=document.getElementById("LastNamei").value,
		password=document.getElementById("Passwordi").value,
		mobile=document.getElementById("MobileNumberi").value,
		isCustomer=true
		lib.signup(email,firstname,lastname,password,mobile,isCustomer)
	}
}

	render(){
		return(
			<div className="signInPopup">
				<div className="SignUpPopupHolder">
					<div id="topPart">
						<p>Sign Up</p>
						<a onClick={lib.toggleSignUp}>X</a>
					</div>
					<div className="formField">
						<input 	placeholder="First Name" 
								type="text" 
								id="FirstNamei"/>
						<input 	placeholder="Last Name" 
								type="text" 
								id="LastNamei"/>
						<input 	placeholder="Mobile Number" 
								type="tel" 
								id="MobileNumberi"/>
						<input 	placeholder="Email" 
								type="email" 
								id="emaili"/>
						<input 	placeholder="Password" 
								type="password" 
								id="Passwordi"/>
						<input 	placeholder="Confirm Password" 
								type="password" 
								id="ConfirmPasswordi"/>
						{(!this.props.SignUp.fetching && !this.props.SignUp.fetched)?
							<button className="btn-red" 
									onClick={this.signup}>
								Sign Up
							</button>:
							null
						}
						{(this.props.SignUp.fetching)?
							<button className="btn-red load" 
									onClick={this.signup}>
								Creating account
								<span className="loader">
									<Faspinner/>
								</span>
							</button>:
							null
						}
						{(this.props.user.fetching)?
							<button className="btn-red load" 
									onClick={this.getUser}>
								Signing in
								<span className="loader">
									<Faspinner/>
								</span>
							</button>:
							null
						}
						<p>
							Already a User
							<a 	id="sign-btn" 
								onClick={lib.toggleSignin}>
								Sign In
							</a>
						</p>
					</div>

				</div>
			</div>
			)
	}
}

SignUp.propTypes={
	user:propTypes.object.isRequired,
	SignUp:propTypes.object.isRequired,
}