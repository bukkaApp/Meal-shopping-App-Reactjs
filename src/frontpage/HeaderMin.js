import React, { Component } from 'react';
import '../style/App.css';
import MdShoppingCart from 'react-icons/lib/md/shopping-basket';
import SimpleForm from './autoComplete';
import ShoppingCart from './shoppingCart';
import {Link} from 'react-router-dom';
import { ButtonToolbar,DropdownButton,MenuItem} from 'react-bootstrap';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { setTimeout } from 'timers';


class HeaderMin extends Component{
	constructor(Props){
		super(Props)
		this.addClass=this.addClass.bind(this)
		
	}
	addClass(){
		const l = document.getElementById('l');
		const sc=document.getElementsByClassName('shopping-cart');
		const na=document.getElementsByClassName('s-cart');
		if (l!==null & sc!==null){
		if (Object.keys(this.props.cart.cart).length){
				for(var i=0;i<sc.length;i++){
				if(!sc[i].classList.contains('color-white')){
					sc[i].classList.add('color-white')
				}
			}
			for(var c=0;c<na.length;c++){
				if(na[c].classList.contains('no-disp')){
					na[c].classList.remove('no-disp')
				}	
			}
			if(!l.classList.contains('s-cart-filled')){
				l.classList.add('s-cart-filled')
			}
		}
		else if(!Object.keys(this.props.cart.cart).length){
			for(var i=0;i<sc.length;i++){
				if(sc[i].classList.contains('color-white')){
					sc[i].classList.remove('color-white')
				}
			}
			for(var p=0;p<na.length;p++){
				if(!na[p].classList.contains('no-disp')){
					na[p].classList.add('no-disp')
				}	
			}
				if(l.classList.contains('s-cart-filled')){
					l.classList.remove('s-cart-filled')
					
				}

		}
	}		
	}
	floatingpadd(){
		var h= document.getElementById('head');
		if(h.classList.contains('ab')){
			h.classList.remove('ab');
			h.classList.add('bc')
		}
	}
	componentDidMount(){
		(this.props.chef.fetched)?
		(this.addClass(),this.floatingpadd()):
		null
	}
	componentWillReceiveProps(nextProps){
		(nextProps!==this.props)?
		(this.props=nextProps,
			setTimeout(this.addClass,50)):
		null

		
	}
	render(){
		return(
			<div id="head" className="myheader header-min header-small ab">
				<Link className="Mybukkalogo" to="/"><img src="http://res.cloudinary.com/www-mybukka-com/image/upload/v1505151382/logo_m8ik1x.png" id="logo-min" alt="logo"/></Link>
				<div className="search-box2 search-box-min search-loc">
				<SimpleForm chefResult={this.props.chefResult}/>
				</div>
				
				{(!this.props.user.isAuthenticated)? <div className=" header-top-button header-top-button-min small-head ">
																<button onClick={this.props.toggleSignin} className="display-toggle min-sign-in">Sign In</button>
																<button className="btn-red display-toggle min-sign-up" onClick={this.props.toggleSignUp} >Sign Up</button>
																{(this.props.Located)?
																			<div>
																				
																				<div>
																					<span className="s-cart">
																					{(Object.keys(this.props.cart.cart).length)? (Object.keys(this.props.cart.cart).map((val,key)=>this.props.cart.cart[val].quantity).reduce((a,b)=>a+b,0)):null}	
																					</span>
																				</div>
																				
																				<div className='m-cart-not-signed-in display-toggle em' id="l">
																					
																					<MdShoppingCart className="shopping-cart display-toggle"/>
																					
																					<div className="m-cart-items">
																						<ShoppingCart   cart={this.props.cart} 
																										deleteCart={this.props.deleteCart} 
																										quantityUpdate={this.props.quantityUpdate} 
																										checkOut={this.props.checkOut} />
																					</div>
																				</div>
																				</div>: 
																				null
																			
																} 	
																
															</div>:
															(<div className=" m-info small-head">
																<div className="m-profile-photo-holder hh">
																	<div className="m-user-icon-holder display-toggle">
																	<img src={this.props.user.user.profile_photo} alt="" className="m-profile-photo"/>
																	</div>
																	<div className="m-profile-options display-toggle">
																		<Link to="/profile" className="lin m-options" >Account</Link>
																		<a className="m-options" onClick={this.props.signout}>Log Out</a>
																	</div>
																</div>
																{(this.props.Located)?
																	(
																	<div>
																		
																		<div>
																			<span className="s-cart lf">
																			{(Object.keys(this.props.cart.cart).length)? (Object.keys(this.props.cart.cart).map((val,key)=>this.props.cart.cart[val].quantity).reduce((a,b)=>a+b,0)):null}	
																			</span>
																		</div>
																		
																		<div className='m-cart-not-signed-in display-toggle em lk' id="l">
																			
																			
																			<MdShoppingCart className="shopping-cart display-toggle"/>
																			
																			<div className="m-cart-items">
																				<ShoppingCart   cart={this.props.cart} 
																								deleteCart={this.props.deleteCart} 
																								quantityUpdate={this.props.quantityUpdate} 
																								checkOut={this.props.checkOut} />
																			</div>
																		</div>
																		</div>): 
																		null
																		
																	
														}
															</div>)

														}

			</div>
			)
	}
}
function mapStateToProps(state){
	return state;
};
export default connect(mapStateToProps)(HeaderMin);

//pathname
HeaderMin.contextTypes = {
	router: PropTypes.object
}