import React,{Component} from 'react'
import '../style/menuPage.css'
import FaStar from 'react-icons/lib/fa/star'
import MdMore from 'react-icons/lib/md/more'
import lib from '../util/lib' 
import ajx from '../util/ajax'
import propTypes from 'prop-types'

class menuPage extends Component{

	componentWillReceiveProps(nextProps){
		if(this.props!==nextProps){
			this.props=nextProps
		}
	}

	render(){
	const cui=this.props.chef.currentCuisine
	const mystyle={
		backgroundImage:`url(${ajx[cui]})`,
	}
	return(
	(this.props.chef.fetched_chefsInYourArea)?	
	(Object.keys(this.props.chef.yourChef).length)?	
	<div id="chefinformation">
		<div 	className="menuCont" 
				style={mystyle} >
			{(!this.props.isrestaurant)?
				<div className="zip ipr">
					
					{
					this.props.chef.chefAndCuisine[cui].map((chef,key)=>
					<img 	src={chef.profile_photo} 
							alt="chef"
							key={key}
							className={(JSON.stringify(chef)=== JSON.stringify(this.props.chef.yourChef))?
										"zzr bblk blk blka":
										"zzr bblk blk blkd"
									}
							onClick={()=>lib.updatechefbycuisine(chef)}/>
					)
					}
				</div>:
				null
			}
			<img 	src={this.props.chef.yourChef.profile_photo} 
					style={{border:'3px solid #f69323'}} 
					alt="chef"/>
			<h3 	className="text-center">
				{this.props.chef.yourChef.first_name+" "+this.props.chef.yourChef.last_name}
			</h3>
			{/**<h5 	className="text-center">
				{this.props.chef.yourChef.role}
			</h5>**/}
			<div className="row">
				<div className="col-xs-4 menu-left">
					<h4>
						{/*(this.props.chef.yourChef.rating_overall===5)?
							(	<span>
									<FaStar/>
									<FaStar/>
									<FaStar/>
									<FaStar/>
									<FaStar/>
								</span>):
						(this.props.chef.yourChef.rating_overall===4)?
						 (	<span>
								<FaStar/>
								<FaStar/>
								<FaStar/>
								<FaStar/>
								<FaStar style={{color:'white'}}/>
							</span>):
						(this.props.chef.yourChef.rating_overall===3)?
							(	<span>
								   <FaStar/>
								   <FaStar/>
								   <FaStar/>
								   <FaStar style={{color:'white'}}/>
								   <FaStar style={{color:'white'}}/>
							   </span>):
						(this.props.chef.yourChef.rating_overall===2)?
							   (	<span>
									  <FaStar/>
									  <FaStar/>
									  <FaStar style={{color:'white'}}/>									  
									  <FaStar style={{color:'white'}}/>									  
									  <FaStar style={{color:'white'}}/>
								  </span>):
						(this.props.chef.yourChef.rating_overall===1)?
								  (	<span>
										 <FaStar/>
										 <FaStar style={{color:'white'}}/>
										 <FaStar style={{color:'white'}}/>									  
										 <FaStar style={{color:'white'}}/>									  
										 <FaStar style={{color:'white'}}/>
									 </span>):
						(this.props.chef.yourChef.rating_overall===0)?
									 (	<span>
											<FaStar style={{color:'white'}}/>
											<FaStar style={{color:'white'}}/>
											<FaStar style={{color:'white'}}/>									  
											<FaStar style={{color:'white'}}/>									  
											<FaStar style={{color:'white'}}/>
										</span>):null
								  
							   
									 */
										Number(Math.round(this.props.chef.yourChef.rating_overall+'e2')+'e-2')
									}
									 
					</h4>
					<h6>RATINGS</h6>
				</div>
				<div className="col-xs-4 menu-middle">
					<h4>{this.props.chef.yourChef.menu.filter(food=>food.visibility).length}</h4>
					<h6>MENU</h6>
				</div>
				<div className="col-xs-4 menu-right">
					<h4>{this.props.chef.menuCategoriesKeys.length}</h4>
					<h6>VARIETIES</h6>
				</div>
			</div>
			<h1 className="chef-buttons text-center">
				<FaStar className="buttn" id="rate"/>
				<MdMore className="buttn" id="more"/>
			</h1>
			{(!this.props.isrestaurant)?
				<div className="vt">
					<h5 className="tt">MORE</h5>
					<div className="yyv">
					{	
						this.props.chef.chefAndCuisine[cui].map((chef,key)=>
						<div className="lkt" key={key} >
						<img 	src={chef.profile_photo} 
								alt="chef"
								className={(JSON.stringify(chef)=== JSON.stringify(this.props.chef.yourChef))?
											"bblk blk blka":
											"bblk blk blkd"
										}
								onClick={()=>lib.updatechefbycuisine(chef)}/>
								<h6 className="tt">{chef.first_name+" "+chef.last_name}</h6>
								{
									(!chef.visibility)?
									<div className="middle">
										<div className={(JSON.stringify(chef)=== JSON.stringify(this.props.chef.yourChef))?
											"dpps blk blka":
											"dpps blk blkd"} 
											onClick={()=>lib.updatechefbycuisine(chef)}>
											Closed
										</div>
									</div>:
									null
								}
						</div>
						)
					}
					</div>
				</div>:
				null
			}
		</div>

		<ul className="menuHolder menuTop">
					{ 
						(this.props.chef.fetched_chefsInYourArea)? 
							this.props.chef.menuCategoriesKeys.map(
								(categ,key)=> (key<9)? 
									<li key={key}>
										<a 		href={'#'+categ} 
												className={"m-categories "+categ} 
												data-categ={categ} 
												onClick={lib.changecol}>
										{categ}
										</a>
									</li>:
									null ):
									null
					}
					{(this.props.chef.menuCategoriesKeys.length>=9)?
						<li id="more" className="r">
							<a id="il" onClick={lib.show}>More...</a>
							{
							(this.props.chef.fetched_chefsInYourArea)? 
								<div id='mt' className="moreitems kp d">
									{
										this.props.chef.menuCategoriesKeys.map(
										(categ,key)=> (key>=9)?
												<a 		key={key}
														href={'#'+categ} 
														className={"m-categories "+categ} 
														data-categ={categ} 
														onClick={lib.changecol}>
												{categ}
												</a>:
											null )
									}
								</div>:
							null
							}
						</li>:
						null
					}
				</ul>
	</div>:
	null:
	null
)
}
};

export default menuPage;

menuPage.propTypes={
	chef:propTypes.object.isRequired,
}