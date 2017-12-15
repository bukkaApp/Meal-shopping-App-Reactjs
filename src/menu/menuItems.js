import React, { Component } from 'react';
import '../style/menuItems.css'

export default class menuItems extends Component{
	constructor(props){
		super(props);
		this.additem=this.additem.bind(this);
		this.stoppropa=this.stoppropa.bind(this);
	}
	additem(e){
		e.stopPropagation();
		e.preventDefault();
		const menu={
			category:e.target.dataset.category,
			desc:e.target.dataset.desc,
			hour:e.target.dataset.hour,
			menu:e.target.dataset.menu,
			min:e.target.dataset.min,
			price:e.target.dataset.price,
			quantity:e.target.dataset.quantity,
			visibility:e.target.dataset.visibility,
			image:e.target.dataset.image
		}
		this.props.addItem(menu)
	}
	stoppropa(e){
		e.stopPropagation();
		e.preventDefault();
		document.getElementById(e.target.dataset.id).click();
	}
	render(){
		return(
					<div className="MenuList" id="many">
					{(this.props.chef.fetched)? this.props.chef.menuCategoriesKeys.map((categ,key)=> {return(
						<div className="eachMenuHolder" key={key}>
							<h3 className="category" id={categ}>{categ}</h3>
							<div className="row">
								{this.props.chef.menuCategories[categ].map((menu,identifier)=>
									<div 	className="col-lg-6 menuCol" 
											key={identifier}  
											onClick={this.stoppropa} 
											data-id={menu.category+identifier}>
										<div className="m-menuitem-holder"  onClick={this.additem} 
																			id={menu.category+identifier}
																			data-category={menu.category} 
																			data-desc={menu.desc}
																			data-hour={menu.hour}
																			data-menu={menu.menu}
																			data-min={menu.min}
																			data-price={menu.price}
																			data-quantity={menu.quantity}
																			data-visibility={menu.visibility}
																			data-image={menu.image} >
											<img 	src={menu.image} 
													alt="food-logo" 
													className="food-logo img-responsive" 
													onClick={this.stoppropa} 
													data-id={menu.category+identifier}/>
											<h4 	className="foodName" 
													id={menu.menu.split(' ').join('')} 
													onClick={this.stoppropa} 
													data-id={menu.category+identifier}>
												{menu.menu}
											</h4>
											<h6 	onClick={this.stoppropa} 
													data-id={menu.category+identifier}>
												{menu.desc}
											</h6>
											<div 	className="cartBtn" 
													onClick={this.stoppropa} 
													onClick={this.stoppropa} 
													data-id={menu.category+identifier}>
												<h4		className="price" 
														id={identifier+"priceId"} 
														data-price={menu.price} 
														onClick={this.stoppropa} 
														data-id={menu.category+identifier}>
													₦{menu.price}
												</h4>
												<a 		onClick={this.increaseNumberOfItem} 
														data-id={identifier+"numberOfItems"} 
														style={{display:'none'}} >
													+
												</a>
												<p		id={identifier+"numberOfItems"} 
														style={{display:'none'}} >
													1
												</p>
												<a 		className="minusButton" 
														style={{display:'none'}} 
														onClick={this.reduceNumberOfItem} 
														data-id={identifier+"numberOfItems"}>
													-
												</a>
												<button className="btn btn-red" 
														style={{display:'none'}} 
														onClick={this.addToCart} 
														data-foodname={menu.menu.split(' ').join('')} 
														data-quantity={identifier+"numberOfItems"} 
														data-price={menu.price}>
													Add to Cart
												</button>
											</div>
										</div>
									</div>)}
							</div>
						</div>
						)}):null}
					</div>
			)
	}
}