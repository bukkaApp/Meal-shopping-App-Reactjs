import React, { Component } from 'react';
import '../style/checkoutSlip.css';
import PageBackground from '../frontpage/PageBackground';
import Footer from '../frontpage/Footer';
import {connect} from 'react-redux';
import MdArrowForward from 'react-icons/lib/md/arrow-forward';
import {
		add_receipt,
		delete_cart,
		clear_receipt
					} from '../data_Container/action/actions';

class checkoutSlip extends Component{
	constructor(props) {
		super(props);
		this.deleteDiv=this.deleteDiv.bind(this);
		this.quantityUpdate=this.quantityUpdate.bind(this);
		this.placeorder=this.placeorder.bind(this);
		this.timewillpass=this.timewillpass.bind(this);
		this.createReceipt=this.createReceipt.bind(this);
	} 

	deleteDiv(e){
		this.props.deleteCart(e.target.dataset.key);
	}

	quantityUpdate(e) {
		console.log("the values are ",e.target.value,e.target.dataset.key);
		this.props.quantityUpdate(e.target.value,e.target.dataset.key);
	}

	//create Receipt
	async createReceipt(){
		const receipt=this.props.cart
		const tax=0
		const deliveryFee=this.props.chef.yourChef.delivery_charge
		const chefProfilepic=this.props.chef.yourChef.profile_photo
		const receiptGenerated=this.props.receipt.receiptGenerated
	   await this.props.dispatch(add_receipt({
										receipt,
									   tax,
									   deliveryFee,
									   chefProfilepic,
									   receiptGenerated
								   }))
	   //this.props.dispatch(delete_cart())
	   //this.toggleShowReceipt()
	}
	timewillpass(){
		const k=Object.keys(this.props.cart.cart);
		const a= k.map((val,key)=>{
			var h=this.props.cart.cart[`${val}`].hour.toString();
			var m=this.props.cart.cart[`${val}`].min.toString()
			return h+m;
		})
		const b=a.map((a)=>parseInt(a))
		const v=Math.max(...b)
		if (v.toString().length<3)
			return v+"min"
		else{
			var o=v.toString()
			var len=o.length;
			var lenh=len-2;
			var om=parseInt(o.substring(lenh))
			var oh=parseInt(o.substring(0,lenh))
			var today=new Date()
			var h=parseInt(today.getHours())+oh
			var m=parseInt(today.getMinutes())+om
			var d=today.getDay()
			if(m>=60){
				m-=60
				h+=1
			}
			if(h>=24){
				h-=24
			}
			if (h<10){
				h="0"+h;
			}
			if (m<10){
				m='0'+m
			}
			var days=['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
			return days[d-1]+" "+h+ " : "+ m
		}

	}

	async placeorder(){
		if(!this.props.user.isAuthenticated){
			alert("You must Sign in first");
		}
		else if(this.props.user.lastCardDigits===""){
			this.props.toggleshowaddcard()
		}
		else{
					var chefUid = this.props.chef.yourChef.uid,
						customerUid = this.props.user.user.uid,
					 	customerName = this.props.user.user.first_name + " " + this.props.user.user.last_name,
						customerEmail = this.props.user.user.email,
					 	customerImage = this.props.user.user.profile_photo,
						coupon_used = false,
						chefName = this.props.chef.yourChef.first_name + " " + this.props.chef.yourChef.last_name,
						chefEmail = this.props.chef.yourChef.email,
						customerAddress = this.props.address.Location,
						chefImage = this.props.chef.yourChef.profile_photo,
						customerPhoneNumber = this.props.user.user.mobile,
						payment_option = "card",
						url="https://chef.mybukka.com/api/v1/bukka/transaction/incoming",
						token = this.props.user.user.token,
						items=Object.keys(this.props.cart.cart);
					var coupon=(coupon_used)? 500:0;
					Promise.all(
						Object.keys(this.props.cart.cart).map((menu,key)=>{
						var quantity=this.props.cart.cart[`${items[key]}`].quantity,
							originalAmt=this.props.cart.cart[`${items[key]}`].totalCost,
							item=items[key],
							charge_customer=true,
							change_amount=originalAmt-coupon,
							description=this.props.cart.cart[`${items[key]}`].desc,
							additionalInfo=this.props.cart.cart[`${items[key]}`].chefinstruction
							
						var	transaction = [  {
								chefUid,
								customerUid,
								originalAmt,
								item,
								customerAddress,
								description,
								quantity,
								customerName,
								customerEmail,
								customerImage,
								chefName,
								chefEmail,
								chefImage,
								customerPhoneNumber,
								payment_option,
								coupon_used,
								additionalInfo,
								charge_customer,
								change_amount
							  }]
							return this.props.placeorder(transaction,token,chefUid, url)
						})
					)
					.then(
						(r)=>{r.map((val,key)=>console.log(val));this.createReceipt()}
					)
					.catch(r=>console.log(r))
		}
}
	render(){
		return(
			<div id="checkoutSlip">
			<img src="https://www.mcdonalds.com/content/dam/usa/documents/mcdelivery/mcdelivery_new11.jpg" alt="food" id="food-img" />
			<div id="food-card">
				<h4 id="order-call">Your order</h4>
				<h1>{(this.props.chef.yourChef.cuisine)? this.props.chef.yourChef.cuisine+" cuisine":"No cuisine selected"}</h1>
				<h4 id="time">{(Object.keys(this.props.cart.cart).length)? "ETA: "+this.timewillpass():"ETA Not applicable"}</h4>
				<h6 id ="eta"><em>(estimated time of arrival)</em></h6>
				<div id="underline"></div>
			</div>
			<div id="small-screen-delivery-info">
				<div id="ssmap">
					<PageBackground/> 
				</div>
				<div id="ssaddress">
					<input value={this.props.address.Location} className="input-addi" readOnly/>
					<input placeholder="Add delivery note..." className="inputsi"/>
				</div>
			</div>
			<button className="btn-red order-btn" onClick={this.placeorder}>Place Order</button>
			{Object.keys(this.props.cart.cart).map((key,i)=>{
				return(
						<div className="item" key={i}>
							<div className="carti">
								<input type="number" onChange={this.quantityUpdate} data-key={key} value={this.props.cart.cart[key].quantity} min="1"/>
								<h4 className="generalDescription">{key}</h4>
								<h4 className="cost">₦{Math.round(this.props.cart.cart[key].totalCost*100)/100}</h4>
							</div>
							<a className="cancelBtn" data-key={key} onClick={this.deleteDiv}>x</a>
						</div>
					)

			})}
			<input className="add-info" id="chefInfo" placeholder="Add Chef instructions"/>
			<div id='costing'>
				<div className="Totalbreakdown">
					<h4>Subtotal</h4>
					<h4 id="subtotal">{"₦"+this.props.cart.total}</h4>
				</div>
				<div className="Totalbreakdown">
					<h4>Delivery Fee</h4>
					<h4 id="delivery_charge">{"₦"+(this.props.chef.yourChef.delivery_charge||"0")}.00</h4>
				</div>
				<div className="Totalbreakdown">
					<h4>Tax</h4>
					<h4 id="tax">₦0.00</h4>
				</div>
				
				<div className="Totalbreakdown">
					<h2>Total</h2>
					<h2 id="total">{"₦"+(parseInt(this.props.chef.yourChef.delivery_charge||0)+parseInt(this.props.cart.total))+".00"}</h2>
				</div>
				<h6>Promo can only be applied after signing in</h6>
			</div>
			</div>
			)
	}
}
function mapStateToProps(state){
	return state;
};
export default connect(mapStateToProps)(checkoutSlip);