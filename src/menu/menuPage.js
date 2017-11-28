import React, { Component } from 'react';
import '../style/menuPage.css'

export default class menuPage extends Component{
	render(){
		return (
				<div className="menuCont">
				<div className="imageHolder">
				<img src="https://res.cloudinary.com/bukka/image/upload/v1500737722/app/MENU-bg.jpg" alt="advert-banner" id="menuPageLogo"/>
				<div className="chefDetailHolder">
					<h1>{this.props.chef.yourChef.first_name+" "+this.props.chef.yourChef.last_name}</h1>
					<img src={this.props.chef.yourChef.profile_photo} alt="chef" id="chef_photo" width="50px" height="50px"/>
				</div>
				</div>
				<ul className="menuHolder menuTop">
				{(this.props.chef.fetched)? this.props.chef.menuCategoriesKeys.map((categ,key)=><li key={key}><a href={'#'+categ}>{categ}</a></li>):null}
				</ul>
				</div>)
	}
}