import React, { Component } from 'react';
import logo from './logo.svg';
import './menuItems.css'

export default class menuItems extends Component{
	constructor(props) {
		super(props);
		this.state={
			cart:{
			
			},
			total:0.00,
			chefInUse:null,
			categ:null
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
	componentDidMount() {
		
			}
	componentWillReceiveProps(nextProps){
		(nextProps.chef != null)?
		this.setState({categ: nextProps.chef.filter((chef)=>chef.role==="Super Chef")[0].menu, chefInUse:nextProps.chefInUse}) : null
	}
	render(){
		return(
					<div className="MenuList">
					{(this.state.categ!=null)? this.state.categ.map((menu,key)=> {return(
						<div className="eachMenuHolder" key={key}>
							<div className="row menuRow">
								<div className="col-md-6 menuCol">
								<img src={menu.image} alt="food-logo" className="food-logo"/>
								<h3 className="foodName" id={menu.menu.split(' ').join('')}>{menu.menu}</h3>
								<h6>{menu.desc}</h6>
								<h4 className="price" id={key+"priceId"}>{menu.price}</h4>
								<div className="cartBtn">
									<a onClick={this.increaseNumberOfItem} data-id={key+"numberOfItems"}>+</a>
									<p id={key+"numberOfItems"} >1</p>
									<a className="minusButton" onClick={this.reduceNumberOfItem} data-id={key+"numberOfItems"}>-</a>
									<button className="btn btn-red" onClick={this.addToCart} data-foodname={menu.menu.split(' ').join('')} data-quantity={key+"numberOfItems"} data-price={key+"priceId"}>Add to Cart</button>
								</div>
								</div>
							</div>
						</div>
						)}):null}
					</div>
			)
	}
}