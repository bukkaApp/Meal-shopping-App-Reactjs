import React, { Component } from 'react';
import '../style/App.css';
import '../style/headerStories.css';
import MdShoppingCart from 'react-icons/lib/md/shopping-cart';
import SimpleForm from './autoComplete';
import ShoppingCart from './shoppingCart';
import {Link} from 'react-router-dom';


export default class headerStories extends Component{
	changecol(e){
		var category=document.getElementsByClassName("m-categories");
		for(var i=0;i<category.length;i++){
			if(category[i].classList.contains('l-selecting')){
				category[i].classList.remove("l-selecting");
			}
		}
		console.log(e.target.dataset.categ)
		var uniquecategory=document.getElementsByClassName(e.target.dataset.categ);
		for(var i=0;i<uniquecategory.length;i++){
			uniquecategory[i].classList.add("l-selecting")
		}
	}
	render(){
		return(
				<div  className="myheader header-min bigMenuHolder">
					<Link to="/"><img src="http://res.cloudinary.com/www-mybukka-com/image/upload/v1505151382/logo_m8ik1x.png" id="logo" alt="logo"/></Link>
					<div className="search-box search-box-min search">
						<SimpleForm chefResult={this.props.chefResult}/>
					</div>
				{(!this.props.user.isAuthenticated)? <div className="header-top-button header-top-button-min head-option">
																<button onClick={this.props.toggleSignin}>Sign In</button>
																<button className="btn-red" onClick={this.props.toggleSignUp} >Sign Up</button>
																<div className='m-cart-not-signed-in'>
																	<MdShoppingCart className="shopping-cart"/>
																	<div className="m-cart-items">
																		<ShoppingCart   cart={this.props.cart} 
																			    		deleteCart={this.props.deleteCart} 
																			    		quantityUpdate={this.props.quantityUpdate} 
																			    		checkOut={this.props.checkOut} />
																	</div>
																</div>
															</div>:
															(<div className="m-info">
																<div className="m-profile-photo-holder">
																	<div className="m-user-icon-holder">
																	<p className="m-name">{this.props.user.user.first_name+" "+this.props.user.user.last_name}</p>
																	<img src={this.props.user.user.profile_photo} alt="" className="m-profile-photo"/>
																	</div>
																	<div className="m-profile-options">
																		<Link to="/profile" className="lin m-options">Account</Link>
																		<a className="m-options" onClick={this.props.signout}>Log Out</a>
																	</div>
																</div>
																<div className='m-cart'>
																	<MdShoppingCart className="m-shopping-cart"/>
																	<div className="m-cart-items">
																		<ShoppingCart   cart={this.props.cart} 
																			    		deleteCart={this.props.deleteCart} 
																			    		quantityUpdate={this.props.quantityUpdate} 
																			    		checkOut={this.props.checkOut} />
																	</div>
																</div>
															</div>)

														}
				<div className="divider"></div>
				<ul className="menuHolder">
					{(this.props.chef.fetched)? this.props.chef.menuCategoriesKeys.map((categ,key)=><li key={key}><a href={'#'+categ} className={"m-categories "+categ} data-categ={categ} onClick={this.changecol.bind(this)}>{categ}</a></li>):null}
				</ul>
			</div>
				)
	}
}