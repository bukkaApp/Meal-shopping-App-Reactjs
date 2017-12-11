import React, { Component } from 'react';
import '../style/menuPage.css';
import FaStar from 'react-icons/lib/fa/star';
import MdMore from 'react-icons/lib/md/more';


/*export default class menuPage extends Component{
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
}*/

const menuPage = (props) =>{
	function changecolor(e){
		var category=document.getElementsByClassName("m-categories");
		for(var i=0;i<category.length;i++){
			if(category[i].classList.contains('l-selecting')){
				category[i].classList.remove("l-selecting");
			}
		}
		console.log(e.target.position)
		var uniquecategory=document.getElementsByClassName(e.target.dataset.categ);
		for(var i=0;i<uniquecategory.length;i++){
			uniquecategory[i].classList.add("l-selecting")
		}
	}
	return(
	<div id="chefinformation">
		<div className="menuCont" >
			<img src={props.chef.yourChef.profile_photo} alt="chef"/>
			<h3 className="text-center">{props.chef.yourChef.first_name+" "+props.chef.yourChef.last_name}</h3>
			<h5 className="text-center">{props.chef.yourChef.role}</h5>
			<div className="row">
				<div className="col-xs-4 menu-left">
					<h4>
						{(props.chef.yourChef.rating_overall===5)?
							(	<span>
									<FaStar/>
									<FaStar/>
									<FaStar/>
									<FaStar/>
									<FaStar/>
								</span>):
						(props.chef.yourChef.rating_overall===4)?
						 (	<span>
								<FaStar/>
								<FaStar/>
								<FaStar/>
								<FaStar/>
								<FaStar style={{color:'white'}}/>
							</span>):
						(props.chef.yourChef.rating_overall===3)?
							(	<span>
								   <FaStar/>
								   <FaStar/>
								   <FaStar/>
								   <FaStar style={{color:'white'}}/>
								   <FaStar style={{color:'white'}}/>
							   </span>):
						(props.chef.yourChef.rating_overall===2)?
							   (	<span>
									  <FaStar/>
									  <FaStar/>
									  <FaStar style={{color:'white'}}/>									  
									  <FaStar style={{color:'white'}}/>									  
									  <FaStar style={{color:'white'}}/>
								  </span>):
						(props.chef.yourChef.rating_overall===1)?
								  (	<span>
										 <FaStar/>
										 <FaStar style={{color:'white'}}/>
										 <FaStar style={{color:'white'}}/>									  
										 <FaStar style={{color:'white'}}/>									  
										 <FaStar style={{color:'white'}}/>
									 </span>):
						(props.chef.yourChef.rating_overall===0)?
									 (	<span>
											<FaStar style={{color:'white'}}/>
											<FaStar style={{color:'white'}}/>
											<FaStar style={{color:'white'}}/>									  
											<FaStar style={{color:'white'}}/>									  
											<FaStar style={{color:'white'}}/>
										</span>):null
								  
							   
							}
					</h4>
					<h6>RATINGS</h6>
				</div>
				<div className="col-xs-4 menu-middle">
					<h4>{props.chef.yourChef.menu.filter(food=>food.visibility).length}</h4>
					<h6>MENU</h6>
				</div>
				<div className="col-xs-4 menu-right">
					<h4>{props.chef.menuCategoriesKeys.length}</h4>
					<h6>VARIETIES</h6>
				</div>
			</div>
			<h1 className="chef-buttons text-center">
				<FaStar className="buttn" id="rate"/>
				<MdMore className="buttn" id="more"/>
			</h1>
		</div>
		<ul className="menuHolder menuTop">
		{(props.chef.fetched)? props.chef.menuCategoriesKeys.map((categ,key)=><li key={key}><a href={'#'+categ} className={"m-categories "+categ} data-categ={categ} onClick={changecolor}>{categ}</a></li>):null}
		</ul>
	</div>
)};

export default menuPage;