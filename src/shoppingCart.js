import React, { Component } from 'react';
import logo from './logo.svg';
import './shoppingCart.css'
import './App.css'

export default class shoppingCart extends Component{
	constructor(props) {
		super(props);
		this.state={
			cart:this.props.cart
		}
	}
	render(){
		return(
			<div id="ShoppingCartHolder">
			{Object.keys(this.props.cart).map((key,i)=>{
				<div id="item">
					<div id="carti">
						<input type="number" Value={this.state.cart[key].quantity} />
						<h4 className="generalDescription">{this.state.cart[key].quantity}</h4>
						<h4 id="cost">${this.state.cart[key].totalCost}</h4>
					</div>
					<a id="cancelBtn">x</a>
				</div>

			})}
				
				<div id="lastcost">
					<div id="Totalcost">
						<h4>Subtotal</h4>
						<h4>$0</h4>
					</div>
					<button class="btn btn-red btn-big">checkout</button>
				</div>
			</div>
			)
	}
}