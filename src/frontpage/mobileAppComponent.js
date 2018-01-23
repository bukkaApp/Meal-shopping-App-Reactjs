import React, { Component } from 'react';
import '../style/mobileAppComponent.css';
import pic from '../assets/app5.png'


export default class mobileAppComponent extends Component{
	render(){
		return(
				<div className="mobileAppImage-holder">
					<div className="row">
						<div className="col-sm-4 left-side">
							<h3>DOWNLOAD BUKKA</h3>
							<p>With as little as four (4) swipes you can begin to enjoy your favourite meals. Join, select your location and place your orders. Relax while your chef delivers.</p>
							
							<h3>1000+ MEALS</h3>
							<p>With more than 500 chefs registered, we have the largest variety of meals available for you to pick form on Bukka.</p>
						</div>
						
						<div className="col-sm-4">
							<img className="pic" src={pic} alt="app5"/>
						</div>
						
						<div className="col-sm-4 right-side">
							<h3>HEALTH AND SAFETY</h3>
							<p>We take food hygiene seriously. Every chef and kitchen goes through a rigorous assessment before being able to cook on Bukka.</p>
							
							<h3>RATE AND REPORT</h3>
							<p>Give every chef a rating, give your opinion and report services you are not comfortable with so we ensure it does not reoccur.</p>
						</div>
					</div>
				</div>
			)
	}
}