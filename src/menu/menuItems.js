import React from 'react';
import '../style/menuItems.css'
import lib from '../util/lib'
import propTypes from 'prop-types'
import ajx from '../util/ajax'
import { CSSTransitionGroup } from 'react-transition-group'

const menuItems =(props)=>{
	
	const additem=(e)=>{
		e.stopPropagation();
		e.preventDefault();
		const menu={
			category:e.currentTarget.dataset.category,
			desc:e.currentTarget.dataset.desc,
			hour:e.currentTarget.dataset.hour,
			menu:e.currentTarget.dataset.menu,
			min:e.currentTarget.dataset.min,
			price:e.currentTarget.dataset.price,
			quantity:e.currentTarget.dataset.quantity,
			visibility:e.currentTarget.dataset.visibility,
			image:e.currentTarget.dataset.image,
			chefuid:props.chef.yourChef.uid
		}
		lib.addItem(menu)
	}
	return(
			<div className="MenuList min-length" id="many">
				{(Object.keys(props.chef.yourChef).length)? 
					(props.chef.yourChef.menu.length)?
					(props.chef.yourChef.visibility)?
					props.chef.menuCategoriesKeys.map(
						(categ,key)=> {return(
						<div 	className="eachMenuHolder" 
								key={key}>
							<h3 className="category" 
								id={categ}>
								{categ}
							</h3>
							<CSSTransitionGroup
										transitionName="menu"
										transitionAppear={true}
										transitionAppearTimeout={1000}
										transitionEnter={false}
										transitionLeave={false}>
							<div className="row">
							{props.chef.menuCategories[categ].map(
								(menu,identifier)=>
								<div 	className="col-lg-6 menuCol" 
										key={identifier}
										data-id={menu.category+identifier}>
									
									<div 	className="m-menuitem-holder"  
											onClick={additem} 
											id={menu.category+identifier}
											data-category={menu.category} 
											data-desc={menu.desc}
											data-hour={menu.hour}
											data-menu={menu.menu}
											data-min={menu.min}
											data-price={menu.price}
											data-quantity={menu.quantity}
											data-visibility={menu.visibility}
											data-image={(menu.image)?menu.image:ajx[`${props.chef.currentCuisine}`]} >
										<img 	src={(menu.image)?menu.image:ajx[`${props.chef.currentCuisine}`]} 
												alt="food-logo" 
												className="food-logo img-responsive"
												data-id={menu.category+identifier}/>
										<h4 	className="foodName" 
												id={menu.menu.split(' ').join('')}
												data-id={menu.category+identifier}>
											{menu.menu}
										</h4>
										<h6 	data-id={menu.category+identifier}>
											{menu.desc}
										</h6>
										<div 	className="cartBtn"
												data-id={menu.category+identifier}>
											<h4		className="price" 
													id={identifier+"priceId"} 
													data-price={menu.price} 
													data-id={menu.category+identifier}>
												₦{menu.price}
											</h4>
											<a 		/*onClick={increaseNumberOfItem} */
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
													/*onClick={reduceNumberOfItem} */
													data-id={identifier+"numberOfItems"}>
												-
											</a>
											<button className="btn btn-red" 
													style={{display:'none'}} 
													/*onClick={addToCart} */
													data-foodname={menu.menu.split(' ').join('')} 
													data-quantity={identifier+"numberOfItems"} 
													data-price={menu.price}>
												Add to Cart
											</button>
										</div>
									</div>
									
								</div>)
							}
							</div>
							</CSSTransitionGroup>
						</div>)
					}):
					<div className="fly">
						<h4>Sorry! This chef is currently closed,Please checkback around 8:00am to 10:00pm tomorrow.Thank you. </h4>
					</div>:
					<div className="fly">
						<h4>Sorry! This chef currently has no items for sale,Please checkback some other time.Thank you. </h4>
					</div>:
				null
				}
			</div>
		)
	}

export default menuItems;

menuItems.propTypes={
	chef:propTypes.object.isRequired
}