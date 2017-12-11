import React, { Component } from 'react';
import '../style/summaryComponent.css';
import image4 from '../assets/image4.jpg';
import image5 from '../assets/image5.jpg';
import image6 from '../assets/image6.jpg';


export default class summaryComponent extends Component{
	render(){
		return(
				<div className="summary-holder">
					<div className="row">
						<div className="col-sm-4">
							<img className="image4 img-responsive" src={image4} alt="image4"/>
							<br />
							<h2>Selection you want</h2>
							<br />
							<p>We're working with over a hundred of the best spots in your city to put the best local food all in one place. If you’re craving it, you can find it on UberEATS.</p>
						</div>
						<div className="col-sm-4">
							<img className="image4 img-responsive" src={image5} alt="image5"/>
							<br />
							<h2>Speed you need</h2>
							<br />
							<p>By tapping into the Uber network, you can get anything from our roster of local restaurants, fast. The average order takes 35 minutes from start to finish.</p>
						</div>
						<div className="col-sm-4">
							<img className="image4 img-responsive" src={image6}  alt="image6"/>
							<br />
							<h2>Service you love</h2>
							<br />
							<p>When you're ready to place your order, you'll see a total that includes the food and delivery price. Pay with your Uber account and track your order on the site as it comes to you.</p>
						</div>
					</div>
				</div>
			)
	}
}