import React, { Component } from 'react';
import logo from '../logo.svg';
import '../style/App.css';
import '../style/headerStories.css';
import MdShoppingCart from 'react-icons/lib/md/shopping-cart';
import SimpleForm from './autoComplete';
import ShoppingCart from './shoppingCart';


export default class headerStories extends Component{
	constructor(props) {
		super(props);
		this.state={
			categ:'',
			address:this.props.address
		}
	}
	searchResultForParent=(result)=>{
		this.props.searchResultForParent(result);
	}
	addressForParent=(adr)=>{
		this.props.addressForParent(adr);
	}
	componentDidMount(){
		this.setState({address:this.props.address});
	}
	/*async getCategories(){
		var categor=Array.from(new Set(this.props.chef.filter((chef)=>chef.role==="Super Chef")[0].menu.map((menu)=>menu.category)));
		console.log(categor);
	}
	componentDidMount() {
		(this.props.checkchef)? this.getCategories():null
	}*/
	
	render(){
		return(
				<div  className="myheader header-min bigMenuHolder">
				<img src="http://res.cloudinary.com/www-mybukka-com/image/upload/v1505151382/logo_m8ik1x.png" id="logo" alt="logo"/>
				<div className="search-box search-box-min search">
				<SimpleForm searchResultForParent={this.searchResultForParent} addressForParent={this.addressForParent} address={this.state.address} > </SimpleForm>
				</div>
				<div className="header-top-button header-top-button-min head-option">
				<button ></button>
				<button className="btn-red"></button>
				<MdShoppingCart className="shopping-cart"/>
				</div>
				<div className="divider"></div>
				<ul className="menuHolder">
							{	
								(this.props.checkchef)? Array.from(new Set(this.props.chef.filter((chef)=>chef.role==="Super Chef")[0].menu.map((menu)=>menu.category))).map((cate,key)=>{
									return(<li key={key}><a>{cate}</a></li>)}) : 
								null
							}
				</ul>
				{
					(this.props.checkchef)? <ShoppingCart cart={this.props.cart} deleteCart={this.props.deleteCart} quantityUpdate={this.props.quantityUpdate} checkOut={this.props.checkOut} />:null
				}
			</div>
				)
	}
}