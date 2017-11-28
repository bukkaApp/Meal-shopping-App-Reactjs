import React, { Component } from 'react';
import '../style/menuItems.css'

export default class menuItems extends Component{
	constructor(props) {
		super(props);
		this.state={
			cart:{
			
			},
			total:0.00
		}
		this.addToCart=this.addToCart.bind(this);
	}

	increaseNumberOfItem(e){
		document.getElementById(e.target.dataset.id).innerHTML=parseInt(document.getElementById(e.target.dataset.id).innerHTML,10)+1;

	}
	reduceNumberOfItem(e){
		(parseInt(document.getElementById(e.target.dataset.id).innerHTML,10)>1)? document.getElementById(e.target.dataset.id).innerHTML=parseInt(document.getElementById(e.target.dataset.id).innerHTML,10)-1:
		null
	}
	async addToCart(e){
		var name=document.getElementById(e.target.dataset.foodname).innerHTML;
		var price=document.getElementById(e.target.dataset.price).innerHTML;
		var quantity=parseInt(document.getElementById(e.target.dataset.quantity).innerHTML,10);
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
				var total=Object.keys(this.state.cart).map((key,i)=>this.state.cart[key].totalCost).reduce((sum,value)=>sum+value,0.00).toFixed(2);
				await this.setState({total:total});
				this.props.updateCart(this.state);
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
				var total= await Object.keys(this.state.cart).map((key,i)=>this.state.cart[key].totalCost).reduce((sum,value)=>sum+value,0).toFixed(2);
				await this.setState({total:total});
				this.props.updateCart(this.state);
			}
			
	}
	render(){
		return(
					<div className="MenuList">
					{(this.props.chef.fetched)? this.props.chef.menuCategoriesKeys.map((categ,key)=> {return(
						<div className="eachMenuHolder" key={key}>
							<h3 className="category" id={categ}>{categ}</h3>
							<div className="row menuRow">
								{this.props.chef.menuCategories[categ].map((menu,identifier)=>
									<div className="col-md-6 menuCol" key={identifier}>
										<img src={menu.image} alt="food-logo" className="food-logo"/>
										<h4 className="foodName" id={menu.menu.split(' ').join('')}>{menu.menu}</h4>
										<h6>{menu.desc}</h6>
										<h4 className="price" id={identifier+"priceId"}>{menu.price}</h4>
										<div className="cartBtn">
											<a onClick={this.increaseNumberOfItem} data-id={identifier+"numberOfItems"}>+</a>
											<p id={identifier+"numberOfItems"} >1</p>
											<a className="minusButton" onClick={this.reduceNumberOfItem} data-id={identifier+"numberOfItems"}>-</a>
											<button className="btn btn-red" onClick={this.addToCart} data-foodname={menu.menu.split(' ').join('')} data-quantity={identifier+"numberOfItems"} data-price={identifier+"priceId"}>Add to Cart</button>
										</div>
									</div>)}
							</div>
						</div>
						)}):null}
					</div>
			)
	}
}