import React, { Component } from 'react';
import '../style/shoppingCart.css';
import '../style/App.css';
import {Link} from 'react-router-dom';





export default class shoppingCart extends Component{
	constructor(props) {
		super(props);
		this.deleteDiv=this.deleteDiv.bind(this);
		this.quantityUpdate=this.quantityUpdate.bind(this);
		console.log(Object.keys(this.props.cart.cart).length);
	} 

	deleteDiv(e){
		this.props.deleteCart(e.target.dataset.key);
	}

	quantityUpdate(e) {
		this.props.quantityUpdate(e.target.value,e.target.dataset.key);
	}


	render(){
		return(
			(Object.keys(this.props.cart.cart).length)?
			<div className="ShoppingCartHolder">
			{Object.keys(this.props.cart.cart).map((key,i)=>{
				return(
								<div className="item" key={i}>
									<div className="carti">
										<input type="number" onChange={this.quantityUpdate} data-key={key} value={this.props.cart.cart[key].quantity} min="1"/>
										<h4 className="generalDescription">{key}</h4>
										<h4 className="cost">₦{Math.round(this.props.cart.cart[key].totalCost*100)/100}</h4>
									</div>
									<a className="cancelBtn" data-key={key} onClick={this.deleteDiv}>x</a>
								</div>)

			})}
				
				<div className="lastcost">
					<div className="Totalcost">
						<h4>Subtotal</h4>
						<h4>₦{this.props.cart.total}</h4>
					</div>
					<Link to="/checkout"><button className="btn btn-red btn-big" >checkout</button></Link>
				</div>
			</div>:
			<div className="ShoppingCartHolder text-center" id="z">
				<h4><em id="z">cart is empty</em></h4>
			</div>
			)
	}
}