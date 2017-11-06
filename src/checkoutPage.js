import React, { Component } from 'react';
import logo from './logo.svg';
import './checkoutPage.css';
import FaMapMarker from 'react-icons/lib/fa/map-marker';
import GoHome from 'react-icons/lib/fa/home';
import FaStickyNote from 'react-icons/lib/fa/sticky-note'

export default class checkoutPage extends Component{
	constructor(props) {
		super(props);
		
	}
	render(){
		return(
			<div id="deliveryInformation" >
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
			</div>
			)
	}
}