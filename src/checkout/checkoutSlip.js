import React, { Component } from 'react';
import logo from '../logo.svg';
import '../style/checkoutSlip.css';
import fetch    from 'isomorphic-fetch';

export default class checkoutSlip extends Component{
	constructor(props) {
		super(props);
		this.state={
			address:this.props.address,
			cart:this.props.cart,
			user:this.props.user,
			chefInUse:this.props.chefInUse

		}
		this.deleteDiv=this.deleteDiv.bind(this);
		this.quantityUpdate=this.quantityUpdate.bind(this);
		this.placeorder=this.placeorder.bind(this);
	} 

	deleteDiv(e){
		this.props.deleteCart(e.target.dataset.key);
	}

	quantityUpdate(e) {
		console.log("the values are ",e.target.value,e.target.dataset.key);
		this.props.quantityUpdate(e.target.value,e.target.dataset.key);
	}

	componentWillReceiveProps(nextProps) {
		if (this.state.cart!=nextProps.cart){
		 this.setState({cart:nextProps.cart})
		}

		if (this.state.user!=nextProps.user){ 
			this.setState({user:nextProps.user})
		}
		if(this.state.chefInUse!=nextProps.chefInUse){
			this.setState({chefInUse:nextProps.chefInUse})
		}
	}

	async placeorder(){
		if(this.state.user==null){
			alert("You must Sign in first");
		}
		else if (this.state.user!=null && this.state.chefInUse!=null) {
					var chefUid=this.state.chefInUse.uid,customerUid=this.state.user.data.uid,description="",customerName=this.state.user.data.first_name+" "+this.state.user.data.last_name,customerEmail=this.state.user.data.email,customerImage=this.state.user.data.profile_photo,coupon_used=false;
					var chefName=this.props.chefInUse.first_name+" "+this.props.chefInUse.last_name,chefEmail=this.props.chefInUse.email,customerAddress=this.state.address,chefImage=this.props.chefInUse.profile_photo,customerPhoneNumber=this.state.user.data.mobile,payment_option="cash",additionalInfo=" ",charge_customer=false,url="http://salty-escarpment-2400.herokuapp.com/api/v1/bukka/transaction/incoming";
					
					Object.keys(this.state.cart.cart).map((menu,key)=>{
						var items=Object.keys(this.state.cart.cart);
						var item=items[key];
						console.log(`${item}`);
						console.log(this.state.cart.cart[`${item}`]);
						var quantity=this.state.cart.cart[`${item}`].quantity;
						var originalAmt=this.state.cart.cart[`${item}`].totalCost;
						console.log({customerUid,chefUid,description,quantity,customerName,customerEmail,customerImage,chefName,chefEmail,customerAddress,chefImage,customerPhoneNumber,payment_option,additionalInfo,coupon_used,charge_customer});
						fetch(url,{
						method:'post',
						headers:{	
			    			'Content-Type': 'application/json'
						},
						body:JSON.stringify({chefUid,customerUid,originalAmt,item,description,quantity,customerName,customerEmail,customerImage,chefName,chefEmail,customerAddress,chefImage,customerPhoneNumber,payment_option,additionalInfo,coupon_used,charge_customer
											})
						/*var xhr = new XMLHttpRequest();
						xhr.open("POST", url, true);
						xhr.setRequestHeader('Content-Type', 'application/json');
						xhr.send(JSON.stringify({chefUid,customerUid,originalAmt,item,description,quantity,customerName,customerEmail,customerImage,chefName,chefEmail,customerAddress,chefImage,customerPhoneNumber,payment_option,additionalInfo,coupon_used,charge_customer
											}));
						xhr.onload = function() {
						  console.log(this.responseText);
						  var data = JSON.parse(this.responseText);
						  console.log(data);
						}*/

					})
					.then(res=>res.json())
					.then(res=>console.log(res))
					.catch(e=>console.log(e))

					})
		}
}
	render(){
		return(
			<div id="checkoutSlip">
			<button className="btn-red order-btn" onClick={this.placeorder}>Place Order</button>
			{Object.keys(this.state.cart.cart).map((key,i)=>{
				return(
						<div className="item" key={i}>
							<div className="carti">
								<input type="number" onChange={this.quantityUpdate} data-key={key} value={this.state.cart.cart[key].quantity} min="1"/>
								<h4 className="generalDescription">{key}</h4>
								<h4 className="cost">₦{Math.round(this.state.cart.cart[key].totalCost*100)/100}</h4>
							</div>
							<a className="cancelBtn" data-key={key} onClick={this.deleteDiv}>x</a>
						</div>
					)

			})}
			<input className="add-info" id="chefInfo" placeholder="Add Chef instructions"/>
			<div>
				<div className="Totalbreakdown">
					<h4>Subtotal</h4><h4>{(this.state.cart.total != null)? "₦"+this.state.cart.total : "₦"+0.00}</h4>
				</div>
				<div className="Totalbreakdown">
					<h4>Delivery Fee</h4><h4>₦10.00</h4>
				</div>
				<div className="Totalbreakdown">
					<h4>Tax</h4><h4>₦0.00</h4>
				</div>
				
				<div className="Totalbreakdown">
					<h2>Total</h2><h2>₦10.00</h2>
				</div>
				<h6>Promo can only be applied after signing in</h6>
			</div>
			</div>
			)
	}
}