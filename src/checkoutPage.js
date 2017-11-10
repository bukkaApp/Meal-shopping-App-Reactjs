import React, { Component } from 'react';
import logo from './logo.svg';
import './checkoutPage.css';
import FaMapMarker from 'react-icons/lib/fa/map-marker';
import GoHome from 'react-icons/lib/fa/home';
import FaStickyNote from 'react-icons/lib/fa/sticky-note';
import SignIn from './signIn';
import SignUp from './SignUp';
import FaCreditCardAlt from 'react-icons/lib/fa/credit-card-alt';
import AddCard from './addCard';

export default class checkoutPage extends Component{
	constructor(props) {
		super(props);
		this.state={
			showsignIn:false,
			showsignUp:false,
			showaddcard:false,
			user: this.props.user
		}
		this.toggleSignin=this.toggleSignin.bind(this);
		this.toggleSignUp=this.toggleSignUp.bind(this);
		this.toggleshowaddcard=this.toggleshowaddcard.bind(this);
		this.addCard=this.addCard.bind(this);
	}
	async addCard(cardNumber,cvv,expirationMonth,expirationYear){
		try{
			var uid=this.state.user.data.uid,email=this.state.user.data.email;
			var url="http://salty-escarpment-2400.herokuapp.com/api/v1/bukka/customer/cardDetails/" + uid;
			console.log({email,cardNumber,cvv,expirationMonth,expirationYear})
			var fetchurl=await fetch(url,{
				method:'post',
				headers:{
						'Accept': 'application/json',
    					'Content-Type': 'application/json'
				},
				body:JSON.stringify({email,cardNumber,cvv,expirationMonth,expirationYear})
			});
			var response=await fetchurl.json();
			console.log(response);

		}catch(e){
			console.log(e);
		}
	}

	toggleshowaddcard(){
		this.setState({
			showaddcard:!this.state.showaddcard
		})
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
				{(this.state.showsignUp)? <SignUp newUser={this.props.newUser} toggleSignUp={this.toggleSignUp} />:null}
				{(this.state.showaddcard)? <AddCard addCard={this.addCard} toggleshowaddcard={this.toggleshowaddcard}/>:null}
				{(this.state.user!=null)? (this.state.user.lastCardDigits !== undefined)? <div  className="carddetails"><h2 className="carddetailsheader" >Payment Info</h2><p id="card-logo"><FaCreditCardAlt/></p>  <p id="card-number">XXXX XXXX XXXX {this.state.user.lastCardDigits}</p></div>:<div  id="carddetails"><h5 id="addCard" onClick={this.toggleshowaddcard}>Add Card +</h5></div>:null}
			</div>
			)
	}
}