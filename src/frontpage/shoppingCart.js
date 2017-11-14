import React, { Component } from 'react';
import logo from '../logo.svg';
import '../style/shoppingCart.css';
import '../style/App.css';

export default class shoppingCart extends Component{
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
			<div className="ShoppingCartHolder">
			{Object.keys(this.state.cart.cart).map((key,i)=>{
				return(
								<div className="item" key={i}>
									<div className="carti">
										<input type="number" onChange={this.quantityUpdate} data-key={key} value={this.state.cart.cart[key].quantity} min="1"/>
										<h4 className="generalDescription">{key}</h4>
										<h4 className="cost">₦{Math.round(this.state.cart.cart[key].totalCost*100)/100}</h4>
									</div>
									<a className="cancelBtn" data-key={key} onClick={this.deleteDiv}>x</a>
								</div>)

			})}
				
				<div className="lastcost">
					<div className="Totalcost">
						<h4>Subtotal</h4>
						<h4>₦{this.state.cart.total}</h4>
					</div>
					<button className="btn btn-red btn-big" onClick={this.props.checkOut}>checkout</button>
				</div>
			</div>
			)
	}
}