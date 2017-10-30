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
		console.log(this.props.cart)
	} 
	totalCost(){
		var total=Object.keys(this.state.cart.cart).map((key,i)=>this.state.cart.cart[key].totalCost).reduce((sum,value)=>sum+value,0);
	}
	render(){
		return(
			<div className="ShoppingCartHolder">
			{Object.keys(this.state.cart.cart).map((key,i)=>{
				return(
								<div className="item" key={i}>
									<div className="carti">
										<input type="number" defaultValue={this.state.cart.cart[key].quantity} min="1"/>
										<h4 className="generalDescription">{key}</h4>
										<h4 className="cost">₦{this.state.cart.cart[key].totalCost}</h4>
									</div>
									<a className="cancelBtn">x</a>
								</div>)

			})}
				
				<div className="lastcost">
					<div className="Totalcost">
						<h4>Subtotal</h4>
						<h4>₦{this.state.cart.total}</h4>
					</div>
					<button className="btn btn-red btn-big">checkout</button>
				</div>
			</div>
			)
	}
}