import React, { Component } from 'react';
import logo from './logo.svg';
import './menuItems.css'

export default class menuItems extends Component{
	constructor(props) {
		super(props);
		this.state={
			cart:{
				rice:{
					price:'',
					quantity:'',
					totalCost:''
				}
			}

		}
		this.addToCart=this.addToCart.bind(this);
	}

	increaseNumberOfItem(){
		document.getElementById('numberOfItems').innerHTML=parseInt(document.getElementById('numberOfItems').innerHTML,10)+1;
	}
	reduceNumberOfItem(){
		(parseInt(document.getElementById('numberOfItems').innerHTML,10)>1)? document.getElementById('numberOfItems').innerHTML=parseInt(document.getElementById('numberOfItems').innerHTML,10)-1:
		null
	}
	async addToCart(){
		var name=document.getElementById('nameOfFoodItem').innerHTML;
		var price=parseFloat(document.getElementById('priceId').innerHTML.substring(1));
		var quantity=parseInt(document.getElementById('numberOfItems').innerHTML,10);
		var totalCost=price*quantity;
			if(this.state.cart.hasOwnProperty(name)){
				var newQuantity=this.state.cart[name].quantity+quantity
				var newTotalcost=price*newQuantity
				var cartUpdate={}
				cartUpdate[name]={
					'price':price,
					'quantity':newQuantity,
					'totalCost':newTotalcost
				}
				await this.setState({cart:{
					...this.state.cart,
					...cartUpdate
					}})
				this.props.updateCart(this.state.cart);
			}

			if(!this.state.cart.hasOwnProperty(name)){
				var newCart={}
				newCart[name]={
					'price':price,
					'quantity':quantity,
					'totalCost':totalCost
					}
				await this.setState({cart:{
					...this.state.cart,
					...newCart
					}})
				this.props.updateCart(this.state.cart);
			}
			
	}
	componentDidMount() {
	}
	render(){
		return(
			<div className="MenuList">
			<div className="eachMenuHolder">
				<h1>Pizzas</h1>
				<div className="row menuRow">
					<div className="col-md-6 menuCol">
						<img src="http://www.ahlanlive.com/sites/default/files/images/2012/05/08/MAHEC-dish1_0.jpg" alt="food-logo" className="food-logo"/>
						<h3 className="foodName" id="nameOfFoodItem">Food Name</h3>
						<h6>Marinara sauce, mushrooms, bell peppers, and bell peppers. Served with garlic bread.</h6>
						<h4 className="price" id="priceId">$13.99</h4>
						<div className="cartBtn">
						<a onClick={this.increaseNumberOfItem}>+</a>
						<p id="numberOfItems">1</p>
						<a className="minusButton" onClick={this.reduceNumberOfItem}>-</a>
						<button className="btn btn-red" onClick={this.addToCart}>Add to Cart</button>
						</div>
					</div>
				 </div>
				</div>
			</div>
			)
	}
}