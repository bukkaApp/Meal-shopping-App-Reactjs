import React, { Component } from 'react';
import logo from '../logo.svg';
import '../style/signIn.css';
import Faspinner from 'react-icons/lib/fa/spinner';
import lib from '../util/lib'


export default class addcard extends Component{
	constructor(props){
		super(props);
		this.addcard=this.addcard.bind(this);
		console.log("see",this.props.user)
	}
	addcard(){
		var number=document.getElementById("cardNumber").value,
		cvv=document.getElementById("CVVNumber").value,
		expiry_month=document.getElementById("MonthNumber").value,
		expiry_year=document.getElementById("YearNumber").value
		if(number==""||cvv==""||expiry_year==""||expiry_month==""){
			(number=="")?
			console.log("number field cannot be empty"):
			(cvv=="")?
			console.log("cvv field cannot be empty"):
			(expiry_year==""||expiry_month=="")?
			console.log("expiry field cannot be empty"):
			null
		}
		else{
			lib.addcard(number,cvv,expiry_month,expiry_year)
		}
	}
	render(){
		return(
			<div className="signInPopup">
				<div className="AddcardPopupHolder">
					<div id="topPart">
						<p>Add Card</p>
						<a onClick={lib.toggleShowcard}>X</a>
					</div>
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
						{(!this.props.user.fetching_addcard)?<button className="btn-red" onClick={this.addcard}>Add Card</button>:null}
						{(this.props.user.fetching_addcard)?<button className="btn-red load">Just a Second!<span className="loader"><Faspinner/></span></button>:null}
					</div>

				</div>
			</div>
			)
	}
}