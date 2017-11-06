import React, { Component } from 'react';
import logo from './logo.svg';
import './checkoutSlip.css';

export default class checkoutSlip extends Component{
	constructor(props) {
		super(props);
		this.state={
			cart:this.props.cart
		}
		this.deleteDiv=this.deleteDiv.bind(this);
		this.quantityUpdate=this.quantityUpdate.bind(this);
	} 

	deleteDiv(e){
		this.props.deleteCart(e.target.dataset.key);
	}

	quantityUpdate(e) {
		console.log("the values are ",e.target.value,e.target.dataset.key);
		this.props.quantityUpdate(e.target.value,e.target.dataset.key);
	}

	componentWillReceiveProps(nextProps) {
		(this.state.cart!=nextProps.cart)?
		this.setState({
			cart:nextProps.cart
		}):
		null
	}

	render(){
		return(
			<div id="checkoutSlip">
			<button className="btn-red order-btn">Place Order</button>
			{Object.keys(this.state.cart.cart).map((key,i)=>{
				return(
								<div className="item" key={i}>
									<div className="carti">
										<input type="number" onChange={this.newValue} data-key={key} value={this.state.cart.cart[key].quantity} min="1"/>
										<h4 className="generalDescription">{key}</h4>
										<h4 className="cost">₦{Math.round(this.state.cart.cart[key].totalCost*100)/100}</h4>
									</div>
									<a className="cancelBtn" data-key={key} onClick={this.deleteDiv}>x</a>
								</div>)

			})}
			<input class="add-info" placeholder="Add Chef instructions"/>
			<div>
				<div class="Totalbreakdown">
					<h4>Subtotal</h4><h4>₦10.00</h4>
				</div>
				<div class="Totalbreakdown">
					<h4>Delivery Fee</h4><h4>₦10.00</h4>
				</div>
				<div class="Totalbreakdown">
					<h4>Tax</h4><h4>₦10.00</h4>
				</div>
				
				<div class="Totalbreakdown">
					<h2>Total</h2><h2>₦10.00</h2>
				</div>
				<h6>Promo can only be applied after signing in</h6>
			</div>
			</div>
			)
	}
}