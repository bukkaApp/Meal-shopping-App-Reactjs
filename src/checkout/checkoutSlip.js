import React, {Component} from 'react';
import '../style/checkoutSlip.css';

export default class checkoutSlip extends Component {
  constructor(props) {
    super(props);
    this.deleteDiv = this.deleteDiv.bind(this);
    this.quantityUpdate = this.quantityUpdate.bind(this);
    this.placeorder = this.placeorder.bind(this);
    console.log(this.state)
  }

  deleteDiv(e) {
    this.props.deleteCart(e.target.dataset.key);
  }

  quantityUpdate(e) {
    console.log("the values are ", e.target.value, e.target.dataset.key);
    this.props.quantityUpdate(e.target.value, e.target.dataset.key);
  }

  async placeorder() {
    if (!this.props.user.isAuthenticated) {
      alert("You must Sign in first");
    } else if (this.props.user.isAuthenticated && this.props.chef.fetched_chefsInYourArea) {
      // var chefUid = this.props.chef.yourChef.uid;
      var chefUid
      var customerUid = this.props.user.user.uid

      var description = ""
      var customerName = this.props.user.user.first_name + " " + this.props.user.user.last_name
      var customerEmail = this.props.user.user.email
      var customerImage = this.props.user.user.profile_photo
      var coupon_used = false;
      var chefName = this.props.chef.yourChef.first_name + " " + this.props.chef.yourChef.last_name
      var chefEmail = this.props.chef.yourChef.email
      var customerAddress = this.props.address.Location
      var chefImage = this.props.chef.yourChef.profile_photo
      var customerPhoneNumber = this.props.user.user.mobile
      var payment_option = "cash"
      var additionalInfo = " "

      //  url from localhost
      var url = "http://localhost:4000/api/v1/bukka/transaction/incoming";
      var token = this.props.user.user.token;
      /*Object.keys(this.state.cart.cart).map((menu,key)=>{
						var items=Object.keys(this.state.cart.cart);
						var item=items[key];
						var quantity=this.state.cart.cart[`${item}`].quantity;
						var originalAmt=this.state.cart.cart[`${item}`].totalCost;
						var charge_customer=false;
						var change_amount =0;


					})*/
      var item = "steamed rice"
      var quantity = 1;
      var originalAmt = 200;
      var charge_customer = true;
      var change_amount = 500;


  // chef uid testing  purpose  change it when on Reall Database
      var  transaction = [  {
        chefUid : 'custom:1507371853515olamitest',
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


      this.props.placeorder(transaction,token,chefUid, url)
    }
  }



  render() {
    return (<div id="checkoutSlip">
      <button className="btn-red order-btn" onClick={this.placeorder}>Place Order</button>
      {
        Object.keys(this.props.cart.cart).map((key, i) => {
          return (<div className="item" key={i}>
            <div className="carti">
              <input type="number" onChange={this.quantityUpdate} data-key={key} value={this.props.cart.cart[key].quantity} min="1"/>
              <h4 className="generalDescription">{key}</h4>
              <h4 className="cost">₦{Math.round(this.props.cart.cart[key].totalCost * 100) / 100}</h4>
            </div>
            <a className="cancelBtn" data-key={key} onClick={this.deleteDiv}>x</a>
          </div>)

        })
      }
      <input className="add-info" id="chefInfo" placeholder="Add Chef instructions"/>
      <div>
        <div className="Totalbreakdown">
          <h4>Subtotal</h4>
          <h4 id="subtotal">{"₦" + this.props.cart.total + ".00"}</h4>
        </div>
        <div className="Totalbreakdown">
          <h4>Delivery Fee</h4>
          <h4 id="delivery_charge">{
              "₦" + (
              this.props.chef.yourChef.delivery_charge || "0.00")
            }</h4>
        </div>
        <div className="Totalbreakdown">
          <h4>Tax</h4>
          <h4 id="tax">₦0.00</h4>
        </div>

        <div className="Totalbreakdown">
          <h2>Total</h2>
          <h2 id="total">{
              "₦" + (
              parseInt(this.props.chef.yourChef.delivery_charge || 0) + parseInt(this.props.cart.total)) + ".00"
            }</h2>
        </div>
        <h6>Promo can only be applied after signing in</h6>
      </div>
    </div>)
  }
}
