import React, { Component } from 'react';
import '../style/mobileAppComponent.css';
//import pic from '../assets/app5.png'
import ajx from '../util/ajax'

export default class mobileAppComponent extends Component{
	render(){
		return(
				<div className="mobileAppImage-holder">
				
						<div className="mobile">
							<img    className="phoneimage  img-responsive" 
							src={ajx.mobileimage} 
							alt="screenshot"/>
						</div>
						<div className="statements">
							<div className="words">
								<h3><b>The New Bukka App</b></h3>
								<p>Take the experience on the go. For those orders you have to make on the go and those late night orders. Use the new improved app Bukka Go! Click below to download yours.</p>
							</div>
							<div className="row app">
									<a href="#">
										<img    className="appleicon" 
											src={ajx.newapplelogo} 
											/>
									</a>
									<a href="#">
										<img    className="googleicon" 
											src={ajx.newandroidlogo} 
											/>
									</a>
							</div>
						</div>
					
				</div>
			)
	}
}

/*<div className="col-sm-4 left-side">
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
						</div>*/