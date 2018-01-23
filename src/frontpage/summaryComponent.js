import React, { Component } from 'react';
import '../style/summaryComponent.css';
import { CSSTransitionGroup } from 'react-transition-group'


export default class summaryComponent extends Component{
	render(){
		return(
				<div className="summary-holder">
					<div className="row">
						<h1 className="summary-text"><b>HOW TO USE</b></h1>
						<br />
						<br />
						<CSSTransitionGroup
							transitionName="summary"
							transitionAppear={true}
							transitionAppearTimeout={2000}
							transitionEnter={false}
							transitionLeave={false}>
						<div className="col-sm-4">
							<img className="image4 img-responsive" src="http://res.cloudinary.com/bukka/image/upload/v1500737722/app/location.png" alt="image4"/>
							<br />
							<h2 className="s-text"><b>SELECT YOUR COMPANY</b></h2>
							<br />
							<p className="summary-p">Select company or event name above after subscription has been approved to access menu from your assigned personal chef.</p>
						</div>
						<div className="col-sm-4">
							<img className="image4 img-responsive" src="http://res.cloudinary.com/bukka/image/upload/v1500737722/app/register.png" alt="image5"/>
							<br />
							<h2 className="s-text"><b>SUBSCRIBE</b></h2>
							<br />
							<p className="summary-p">Complete a subscription form for the service you want. Give us quick information about you and your workplace and we would get back to you within 24hours.</p>
						</div>
						<div className="col-sm-4">
							<img className="image4 img-responsive" src="http://res.cloudinary.com/bukka/image/upload/v1500737722/app/meal.png" alt="image6"/>
							<br />
							<h2 className="s-text"><b>ENJOY YOUR MEAL</b></h2>
							<br />
							<p className="summary-p">The earlier you place your order, the sooner it would be prepared and delivered. Breakfast order before: 10am, Lunch order before 1pm.</p>
						</div>
						</CSSTransitionGroup>
					</div>
				</div>
			)
	}
}