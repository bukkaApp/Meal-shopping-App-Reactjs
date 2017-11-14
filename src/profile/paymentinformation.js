import React, { Component } from 'react';
import logo from '../logo.svg';
import '../style/signIn.css';

export default class paymentinformation extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div className="signInPopup white-background m-position-fix">
				<div className="AddcardPopupHolder m-pad">
					
					<div className="formField">
						<div id="headingHolder">
							<h3>Card Information</h3>
							<div id="imageHolder">
									<img src="https://res.cloudinary.com/bukka/image/upload/v1500737722/app/visa.png" alt="visa" />
									<img src="https://res.cloudinary.com/bukka/image/upload/v1500737722/app/mastercard.png" alt="master"/>
									<img src="https://res.cloudinary.com/bukka/image/upload/v1500737722/app/verve.png" alt="verve"/>
							</div>
						</div>
						<div id="cardNumberHolder">
							<h4>Card number</h4>
							<input id="cardNumber" placeholder="1234-5678-9999-9999"/>
						</div>
						<div id="extrainfoHolder">
							<div id="info">
								<h4>Expiration</h4>
								<h4>CVC Code</h4>
							</div>
							<div className="otherinfoHolder">
								<div className="YearDate">
									<input  id="MonthNumber" type="number" min="1" max="12" placeholder="MM" />
									<input  id="YearNumber" type="number" min="2017" max="2099" step="1" placeholder="YYYY" />
								</div>
								<div className="cvvinfo">
									<input  id="CVVNumber" min="100" max="999" placeholder="128"/>
								</div>
							</div>
						</div>
						<button className="btn-red" >Add Card</button>
					</div>

				</div>
			</div>
			)
	}
}