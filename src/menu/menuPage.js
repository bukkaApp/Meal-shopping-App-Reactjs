import React,{Component} from 'react'
import '../style/menuPage.css'
import FaStar from 'react-icons/lib/fa/star'
import MdMore from 'react-icons/lib/md/more'
import lib from '../util/lib' 
import ajx from '../util/ajax'
import propTypes from 'prop-types'
import SortIcon from 'react-icons/lib/fa/sort-amount-asc'

class menuPage extends Component {
	constructor(props){
		super(props)
		this.state={
			isSorted:false,
			SortedChefs:null,
			isRatingSorted:false,
			RatingSortedChefs:null
		}
		this.rearrangedist=this.rearrangedist.bind(this)
		this.rearrangerate=this.rearrangerate.bind(this)
		this.handleSelect=this.handleSelect.bind(this)
	}
	handleSelect(e){
		const v=e.target.value
		if(v==="Distance"){
			this.rearrangedist()
		}else if(v==="Ratings"){
			this.rearrangerate()
		}
	}
	rearrangedist(){
		//await console.log(this.props.chef.chefAndCuisine[`${this.props.chef.currentCuisine}`])

		(!this.state.isSorted)?
		this.setState((prevState,props)=>({
			SortedChefs:props.chef.chefAndCuisine[`${props.chef.currentCuisine}`].sort((a,b)=>
			a.distance-b.distance)
		})):
		this.setState((prevState,props)=>({
			SortedChefs:this.props.chef.chefAndCuisine[`${this.props.chef.currentCuisine}`].sort((a,b)=>
			b.distance-a.distance)
		}))
		this.setState((prevState,props)=>({
			isSorted:!this.state.isSorted,
			isRatingSorted:false,
			RatingSortedChefs:null
		}))
		console.log(this.state)
		console.log(this.props.chef.chefAndCuisine[`${this.props.chef.currentCuisine}`])
	}
	rearrangerate(){
		//await console.log(this.props.chef.chefAndCuisine[`${this.props.chef.currentCuisine}`])
		
		(!this.state.isRatingSorted)?
		this.setState((prevState,props)=>({
			RatingSortedChefs:props.chef.chefAndCuisine[`${props.chef.currentCuisine}`].sort((a,b)=>
			b.rating_overall-a.rating_overall)
		})):
		this.setState((prevState,props)=>({
			RatingSortedChefs:this.props.chef.chefAndCuisine[`${this.props.chef.currentCuisine}`].sort((a,b)=>
			a.rating_overall-b.rating_overall)
		}))
		this.setState((prevState,props)=>({
			isRatingSorted:!this.state.isRatingSorted,
			isSorted:false,
			SortedChefs:null
		}))

		console.log(this.state)
		console.log(this.props.chef.chefAndCuisine[`${this.props.chef.currentCuisine}`])
	}
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
				(Object.keys(this.props.chef.chefAndCuisine).length>1)?
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
				null:
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
			{	(!this.props.isrestaurant)?
				(Object.keys(this.props.chef.chefAndCuisine).length)?
				(this.props.chef.chefAndCuisine[cui].length===1)?
					null:
				<div className="vt">
				<div className="m">
					<h5 className="ttm"><b>MORE</b></h5>

					<div className="sd">
							<select className="sd"
									onChange={this.handleSelect}>
								<option className="sop" value="Sort">Sort by...</option>
								<option className="sop" value="Distance" >Distance</option>
								<option className="sop" value="Ratings" >Ratings</option>
							</select>
						</div>
					</div>
					<div className="yyv">
					{
						(this.state.isSorted)?
						this.state.SortedChefs.map((chef,key)=>
						<div className="lkt" key={key} >
						<img 	src={chef.profile_photo} 
								alt="chef"
								className={(JSON.stringify(chef)=== JSON.stringify(this.props.chef.yourChef))?
											"bblk blk blka":
											"bblk blk blkd"
										}
								onClick={()=>lib.updatechefbycuisine(chef)}/>
								<div className="t">
									<h6 className="ttn"><b>{chef.first_name+" "+chef.last_name}</b></h6>
									<h6 className="ttd">{(chef.distance).toFixed(2)} km away</h6>
								</div>
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
						</div>):
						(this.state.isRatingSorted)?
						this.state.RatingSortedChefs.map((chef,key)=>
						<div className="lkt" key={key} >
						<img 	src={chef.profile_photo} 
								alt="chef"
								className={(JSON.stringify(chef)=== JSON.stringify(this.props.chef.yourChef))?
											"bblk blk blka":
											"bblk blk blkd"
										}
								onClick={()=>lib.updatechefbycuisine(chef)}/>
								<div className="t">
									<h6 className="ttn"><b>{chef.first_name+" "+chef.last_name}</b></h6>
									<h6 className="ttd">{(chef.rating_overall).toFixed(2)} / 5 stars</h6>
								</div>
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
						</div>):
					this.props.chef.chefAndCuisine[cui].map((chef,key)=>
					<div className="lkt" key={key} >
					<img 	src={chef.profile_photo} 
							alt="chef"
							className={(JSON.stringify(chef)=== JSON.stringify(this.props.chef.yourChef))?
										 "bblk blk blka":
										 "bblk blk blkd"
									}
							onClick={()=>lib.updatechefbycuisine(chef)}/>
							<div className="t">
								<h6 className="ttn"><b>{chef.first_name+" "+chef.last_name}</b></h6>
								<h6 className="ttd">{(chef.distance).toFixed(2)} km</h6>
							</div>
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
			null:
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