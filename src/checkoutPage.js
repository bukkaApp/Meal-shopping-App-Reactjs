import React, { Component } from 'react';
import logo from './logo.svg';
import './checkoutPage.css';
import FaMapMarker from 'react-icons/lib/fa/map-marker';
import GoHome from 'react-icons/lib/fa/home';
import FaStickyNote from 'react-icons/lib/fa/sticky-note';
import SignIn from './signIn';
import SignUp from './SignUp';

export default class checkoutPage extends Component{
	constructor(props) {
		super(props);
		this.state={
			showsignIn:false,
			showsignUp:false,
			user: this.props.user
		}
		this.toggleSignin=this.toggleSignin.bind(this);
		this.toggleSignUp=this.toggleSignUp.bind(this);
	}

	toggleSignin(){
		this.setState({
			showsignIn:!this.state.showsignIn
		})
	}
	toggleSignUp(){
		this.setState({
			showsignUp:!this.state.showsignUp
		})
	}
	componentWillReceiveProps(nextProps){
		(nextProps.user != this.state.user)? this.setState({user:nextProps.user}) :
		null
	}

	render(){
		return(
			<div id="deliveryInformation" >
				
				{(this.state.user == null)? <div className="btn-Holder">
				<button onClick={this.toggleSignin}>Sign In</button>
				<button onClick={this.toggleSignUp} className="btn-red">Sign Up</button>
				</div> : null }
				<h2>Delivery Info</h2>
				<div className="infoholder">
				<input defaultValue="Ikeja GRA, Ikeja, Lagos, Nigeria" className="inputs"/>
				<span className="icon">
					<FaMapMarker/>
				</span>
				</div>

				<div className="infoholder">
				<input placeholder="Apartment/Suite/Floor..." className="hideBorder inputs"/>
				<span className="icon">
					<GoHome/>
				</span>
				</div>

				<div className="infoholder">
				<input placeholder="Add delivery note" className="hideBorder inputs"/>
				<span className="icon">
					<FaStickyNote/>
				</span>
				</div>
				{(this.state.showsignIn)? <SignIn newUser={this.props.newUser} toggleSignin={this.toggleSignin}/>:null}
				{(this.state.showsignUp)? <SignUp toggleSignUp={this.toggleSignUp}/>:null}
			</div>
			)
	}
}