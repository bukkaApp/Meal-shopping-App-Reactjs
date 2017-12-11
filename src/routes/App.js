import React, { Component } from 'react';
import logo from '../logo.svg';
import '../style/App.css';
import '../style/index.css';
import PageBackground from '../frontpage/PageBackground';
import Footer from '../frontpage/Footer';
import ScrollLogic from '../frontpage/ScrollLogic';
/*import ChefComponent from '../frontpage/chefComponent';*/
import MobileAppComponent from '../frontpage/mobileAppComponent';
import SummaryComponent from '../frontpage/summaryComponent';
import MenuPage from '../menu/menuPage';
import MenuItems from '../menu/menuItems';
import CheckoutPage from '../checkout/checkoutPage';
import CheckoutSlip from '../checkout/checkoutSlip';
import {connect} from 'react-redux';
import { fetch_address, fetch_chef, identify_user, get_chef,showsignIn,showsignUp,get_chef_update_failed,updating_user_info,signout,signup,update_cart} from '../data_Container/action/actions';
import fetch   from 'isomorphic-fetch';
import SignIn from '../authentication/signIn';
import SignUp from '../authentication/SignUp';
import axios from 'axios';
import '../homepage/Appstyle.css';
import Home from '../homepage/Home';
import Map from '../homepage/Map';
import Reg from '../homepage/Reg';
import Nochefavailable from '../frontpage/nochef';



class App extends Component {
	constructor(props) {
		super(props);
		this.state={address:this.props.address,
					chef:this.props.chef,
					cart:this.props.cart,
					user:this.props.user,
					page:this.props.page,
					signup:this.props.SignUp,
					
					};
		this.deleteCart=this.deleteCart.bind(this);
		this.quantityUpdate=this.quantityUpdate.bind(this);
		this.toggleSignin=this.toggleSignin.bind(this);
		this.toggleSignUp=this.toggleSignUp.bind(this);
		this.signin=this.signin.bind(this);
		this.signout=this.signout.bind(this);
		this.signup=this.signup.bind(this);
		this.updateCart=this.updateCart.bind(this);
		this.chefResult=this.chefResult.bind(this);
		this.chefcloseby=this.chefcloseby.bind(this);
	}

	//togglepages
	toggleSignin(){
		this.props.dispatch(showsignIn(this.props.page.showsignIn))
	}
	toggleSignUp(){
		this.props.dispatch(showsignUp(this.props.page.showsignUp))
	}
	//signin and signup
	signin(email,password){
		this.props.dispatch(identify_user(axios.post("https://salty-escarpment-2400.herokuapp.com/api/v1/bukka/auth/custom/login",{email,password})))
		.then(()=>{this.props.dispatch(updating_user_info(axios.get("https://salty-escarpment-2400.herokuapp.com/api/v1/bukka/customer/card/"+this.props.user.user.uid)))})
		.then(()=>this.toggleSignin())
		.catch((e)=>console.log('Sorry! There was a problem',e))
	}

	signup(email,firstname,lastname,password,mobile,isCustomer){
		this.props.dispatch(signup(axios.post("https://salty-escarpment-2400.herokuapp.com/api/v1/bukka/auth/register",{email,firstname,lastname,password,mobile,isCustomer})))
		.then(()=>{this.props.dispatch(identify_user(axios.post("https://salty-escarpment-2400.herokuapp.com/api/v1/bukka/auth/custom/login",{email,password})))})
		.then(()=>this.toggleSignUp())
		.catch((e)=>console.log('Sorry! There was a problem',e))
	}
	//signout
	signout(){
		this.props.dispatch(signout());
	}
	//updatecart
	updateCart=(cart)=>{
		this.props.dispatch(update_cart(cart));
	}
	
	//deleteCartItem
	deleteCart=(food)=>{
		var newCart=this.props.cart.cart;
		delete newCart[food];
		var cart={};
		cart.cart=newCart;
		var total=Object.keys(newCart).map((key,i)=>newCart[key].totalCost).reduce((sum,value)=>sum+value,0).toFixed(2);
		cart.total=total;
		this.updateCart(cart);
	}
	//quantityUpdate
	quantityUpdate=(Quantity,key)=>{
		var price=this.props.cart.cart[key].price,totalCost=price*Quantity,newCart=this.props.cart.cart,cart={};
		newCart[key].quantity=Quantity;
		newCart[key].totalCost=totalCost;
		var total=Object.keys(newCart).map((key,i)=>newCart[key].totalCost).reduce((sum,value)=>sum+value,0).toFixed(2);
		cart.cart=newCart;
		cart.total=total;
		this.updateCart(cart);
	}
	//getchef
	chefResult=(latLng)=>{
		this.props.dispatch(fetch_chef(axios.get("https://chef.mybukka.com/api/v1/bukka/chefs/"+latLng.lat+"/"+latLng.lng)))
		.then(()=>{
			if(this.chefcloseby(this.props.chef.chefsInYourArea).yourChef.length===0){
				var res={
					response:{
						data:""
					}
				}
				res.response.data="No Chefs found around this location"
				this.props.dispatch(get_chef_update_failed(res))
			}else{
			this.props.dispatch(get_chef(this.chefcloseby(this.props.chef.chefsInYourArea)))
			}
			}
		)
		.catch((e)=>console.log('Sorry! There was a problem',e))
	}
	chefcloseby=(result)=>{
		try{
			var yourChef=result.filter((chef)=>chef.role==="Super Chef")[0];
			console.log("yourChef",yourChef)
			if(yourChef){
				var categ=Array.from(new Set(result.filter((chef)=>chef.role==="Super Chef")[0].menu.map((menu)=>menu.category)));
				var categorizedMenu={};
				//var menuP=yourChef.menu.filter(items=>categ.indexOf(items.category)>-1).filter(item=>item.visibility===true)
				
				for(var i=0;i<categ.length;i++){
					var menuPerCategory=[];
					yourChef.menu.map((items)=>{
						if(items.category===categ[i]){
						if(items.visibility){
							//menuPerCategory.push(items);
						}
						menuPerCategory.push(items);
						}
					}
					)
					if(menuPerCategory.length>0){
						categorizedMenu[`${categ[i]}`]=menuPerCategory;
					}
				}
			
				return{
				menu:categorizedMenu,
				yourChef:yourChef,
				categ:Object.keys(categorizedMenu)
				}
			}else{
				return{
					yourChef:[]
				}
			}
		}catch(e){
		  console.log("Network error",e);
		}
	  }
  render() {
    return (
		(this.props.chef.error)?
			<Nochefavailable    user={this.props.user}
								signout={this.signout}
								cart={this.props.cart}
								error={this.props.chef.error}
								chefResult={this.chefResult}
								address={this.props.address}
								/>:
		(!this.props.chef.fetched)? 
			<div style={{position:'absolute'}}> 
				<ScrollLogic    address={this.props.address.Location} 
								chef={this.props.chef}
								toggleSignin={this.toggleSignin}
								toggleSignUp={this.toggleSignUp}
								deleteCart={this.deleteCart} 
								quantityUpdate={this.quantityUpdate}
								user={this.props.user}
								signout={this.signout}
								cart={this.props.cart}
								chefResult={this.chefResult} />
				<div className="first-page-background">
				<PageBackground />
				</div>
				<div className="dev">
					<SummaryComponent/>
					<MobileAppComponent/>
					<Footer/>
					{(this.props.page.showsignIn)? 
						<SignIn newUser={this.props.newUser} 
								toggleSignin={this.toggleSignin} 
								toggleSignUp={this.toggleSignUp}
								signin={this.signin}
								user={this.props.user}/>:null}
					{(this.props.page.showsignUp)? 
						<SignUp newUser={this.props.newUser} 
								toggleSignUp={this.toggleSignUp} 
								toggleSignin={this.toggleSignin}
								signup={this.signup}
								SignUp={this.props.SignUp}
								user={this.props.user}/>:null}
					
				</div>
			</div>:
			<div className="devi">
				<ScrollLogic    address={this.props.address.Location}
								Located={this.props.address.Located} 
								chef={this.props.chef} 
								deleteCart={this.deleteCart} 
								quantityUpdate={this.quantityUpdate} 
								toggleSignin={this.toggleSignin}
								toggleSignUp={this.toggleSignUp}
								user={this.props.user}
								signout={this.signout}
								cart={this.props.cart}
								chefResult={this.chefResult}/>
				<MenuPage chef={this.props.chef}/>
				<MenuItems updateCart={this.updateCart} 
						chef={this.props.chef} />
				<Footer/>
				{(this.props.page.showsignIn)? 
					<SignIn toggleSignin={this.toggleSignin}
							toggleSignUp={this.toggleSignUp}
							signin={this.signin}
							user={this.props.user} /> :null}

				{(this.props.page.showsignUp)? 
					<SignUp toggleSignUp={this.toggleSignUp}
							toggleSignin={this.toggleSignin}
							signup={this.signup}
							SignUp={this.props.SignUp}
							user={this.props.user} />:null}
			</div>
    	);
  }
};

function mapStateToProps(state){
	return state;
};
export default connect(mapStateToProps)(App);
