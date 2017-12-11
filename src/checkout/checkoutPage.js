import React, { Component } from 'react';
import '../style/checkoutPage.css';
import FaMapMarker from 'react-icons/lib/fa/map-marker';
import GoHome from 'react-icons/lib/fa/home';
import FaStickyNote from 'react-icons/lib/fa/sticky-note';
import FaCreditCardAlt from 'react-icons/lib/fa/credit-card-alt';

export default class checkoutPage extends Component{
	constructor(props) {
		super(props);
		this.toggleSignin=this.toggleSignin.bind(this);
		this.toggleSignUp=this.toggleSignUp.bind(this);
		this.toggleshowaddcard=this.toggleshowaddcard.bind(this);
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


	render(){
		return(
			<div id="deliveryInformation" >
				{(!this.props.user.isAuthenticated)? <div className="btn-Holder">
				<h3 className="instruction">
				Sign in or sign up with a Bukka account
				</h3>
				<button onClick={this.props.toggleSignUp} className="btn-red">Sign Up</button>
				<button onClick={this.props.toggleSignin}>Sign In</button>
				</div> : null }
				<h3 id="d-info">Delivery Info</h3>
				<div className="infoholder">
				<input value={this.props.address.Location} className="input-add" readOnly/>
				<span className="icon" style={{color:'black'}}>
					<FaMapMarker/>
				</span>
				</div>

				<div className="infoholder">
				<input placeholder="Apartment/Suite/Floor..." className="hideBorder inputs"/>
				<span className="icon l-icon-small">
					<GoHome/>
				</span>
				</div>

				<div className="infoholder">
				<input placeholder="Add delivery note" className="hideBorder inputs"/>
				<span className="icon l-icon-small" >
					<FaStickyNote/>
				</span>
				</div>
				{(this.props.user.isAuthenticated)? 
					(this.props.user.fetched_lastCardDigits)? 
							<div  className="carddetails">
								<h2 className="carddetailsheader" >
									Payment Info
								</h2>
								<p id="card-logo">
									<FaCreditCardAlt/>
								</p>  
								<p id="card-number">
									XXXX XXXX XXXX {this.props.user.lastCardDigits}
								</p>
								</div>:
								<div  id="carddetails">
									<h5 id="addCard" onClick={this.props.toggleshowaddcard}>
										Add Card +
									</h5>
								</div>
								:null
							}
			</div>
			)
	}
}