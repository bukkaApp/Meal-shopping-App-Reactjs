import React from 'react'
import '../style/checkoutSlip.css'
import PageBackground from '../frontpage/gmap'
import {connect} from 'react-redux'
import lib from '../util/lib'
import ajx from '../util/ajax'
import Faspinner from 'react-icons/lib/fa/spinner'
import {mapStateToProps} from '../util/ajax'
import {Link} from 'react-router-dom'
 
const checkoutSlip =(props)=>{
	const deleteDiv=(e)=>{
		lib.deleteCart(e.currentTarget.dataset.key)
	}

	const quantityUpdate=(e)=> {
		lib.quantityUpdate(e.currentTarget.value,e.currentTarget.dataset.key)
	}
	const timewillpass=(e)=>{
		return lib.timewillpass().timewillpass
	}

	const placeorder=()=>{
		if(!props.user.isAuthenticated){
			lib.toggleSignin()
		}
		else if(props.user.lastCardDigits===""){
			lib.toggleShowcard()
		}else if(!props.address.Located){
			alert("Please enter a delivery address")
		}else{ 
			lib.processtransact()
		}
	}	
	const handledelivery=(e)=>{
		e.persist()
		lib.savedeliveryinfo(e.currentTarget.value)
	}
	
	return(
		<div id="checkoutSlip">
			<img 	src={ajx[`${props.chef.currentCuisine}`]} 
					alt="food" 
					id="food-img" />
			<div id="food-card">
				<h4 id="order-call">
					Your order
				</h4>
				<h1>
					{(props.chef.yourChef.cuisine)? 
						props.chef.yourChef.cuisine+" cuisine":
						"No cuisine selected"
					}
				</h1>
				<h4 id="time">
					{(Object.keys(props.cart.cart).length)? 
						"ETA: "+timewillpass():
						"ETA Not applicable"
					}
				</h4>
				<h6 id ="eta">
					<em>(estimated time of arrival)</em>
				</h6>
				<div id="underline"></div>
			</div>
			<div id="small-screen-delivery-info">
				<div id="ssmap">
				<PageBackground one={true} bloc={{lat:props.address.lat,lng:props.address.lng}} />
				</div>
				<div id="ssaddress">
					{(props.page.isRestaurant)?
						<Link to="/Search" className="vinc">
							<input 	value={props.address.Location} 
									className="input-addi" 
									placeholder="Please enter a delivery address.."
									readOnly/>
						</Link>:
						<input 	value={props.address.Location} 
								className="input-addi" 
								placeholder="Please enter a delivery address.."
								readOnly/>
					}
					<input 	placeholder="Add delivery note..." 
							className="inputsi"
							onChange={handledelivery} />
				</div>
			</div>
			{(!props.user.orderstatus_fetching)?
				<button className="btn-red order-btn" 
						onClick={placeorder}>
					Place Order
				</button>:
				null
			}
			{(props.user.orderstatus_fetching)?
				<button className="btn-red order-btn load" 
						onClick={placeorder}>
					Contacting chef
					<span className="loader">
							<Faspinner/>
					</span>
				</button>:
				null
			}
			{Object.keys(props.cart.cart).map((key,i)=>{
				return(
						<div 	className="item" 
								key={i}>
							<div className="carti">
								<input 	type="number" 
										onChange={quantityUpdate} 
										data-key={key} 
										value={props.cart.cart[key].quantity} 
										min="1"/>
								<h4 className="generalDescription">
									{key}
								</h4>
								<h4 className="cost">
									₦{Math.round(props.cart.cart[key].totalCost*100)/100}
								</h4>
							</div>
							<a 	className="cancelBtn" 
								data-key={key} 
								onClick={deleteDiv}>
								x
							</a>
						</div>
					)	})
				}
				<div id='costing'>
					<div className="Totalbreakdown">
						<h4>Subtotal</h4>
						<h4 id="subtotal">{"₦"+props.cart.total}</h4>
					</div>
					<div className="Totalbreakdown">
						<h4>Delivery Fee</h4>
						<h4 id="delivery_charge">
							{"₦"+(props.chef.yourChef.delivery_charge||"0")}.00
						</h4>
					</div>
					<div className="Totalbreakdown">
						<h4>Tax</h4>
						<h4 id="tax">₦0.00</h4>
					</div>
					
					<div className="Totalbreakdown">
						<h2>Total</h2>
						<h2 id="total">
							{"₦"+(parseInt(props.chef.yourChef.delivery_charge||0,10)+parseInt(props.cart.total,10))+".00"}
						</h2>
					</div>
					<h6>Promo can only be applied after signing in</h6>
				</div>
				</div>
		)
}

export default connect(mapStateToProps)(checkoutSlip);