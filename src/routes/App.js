import React from 'react'
import '../style/App.css'
import '../style/index.css'
import PageBackground from '../frontpage/gmap'
import Footer from '../frontpage/Footer'
import ScrollLogic from '../frontpage/ScrollLogic'
import MobileAppComponent from '../frontpage/mobileAppComponent'
import SummaryComponent from '../frontpage/summaryComponent'
import MenuPage from '../menu/menuPage'
import MenuItems from '../menu/menuItems'
import {connect} from 'react-redux'
import SignIn from '../authentication/signIn'
import SignUp from '../authentication/SignUp'
import '../homepage/Appstyle.css'
import Nochefavailable from '../frontpage/nochef'
import Addmenu from '../frontpage/addmenu'
import HeaderMin from '../frontpage/HeaderMin'
import Cuisine from '../frontpage/cuisine'



const App =(props)=> {
return (
	(props.chef.error)?
		<Nochefavailable  />:
		(!props.chef.fetched)? 
		(props.chef.fetched_chefAndCuisine)?
			<div className="devi aah">
				<HeaderMin/>
				<Cuisine/>
				<Footer/>
				{(props.page.showsignIn)? 
					<SignIn user={props.user}/>:
					null
				}
				{(props.page.showsignUp)? 
					<SignUp SignUp={props.SignUp}
							user={props.user}/>:
					null
				}
			</div>:
			<div style={{position:'absolute'}}> 
				<ScrollLogic 	chef_fetched={props.chef.fetched}
								Located={props.address.Located}		 />
				<div className="first-page-background">
					<PageBackground one={true}/>
				</div>
				<div className="dev">
					<SummaryComponent/>
					<MobileAppComponent/>
					<Footer/>
					{(props.page.showsignIn)? 
						<SignIn user={props.user}/>:
						null
					}
					{(props.page.showsignUp)? 
						<SignUp SignUp={props.SignUp}
								user={props.user}/>:
						null
					}	
				</div>
			</div>:
			<div className="devi">
				<ScrollLogic 	chef_fetched={props.chef.fetched}
								Located={props.address.Located}		 />
				<MenuPage chef={props.chef}/>
				<MenuItems	chef={props.chef} />
				<Footer/>
				{(props.page.showsignIn)? 
					<SignIn user={props.user} /> :
					null
				}
				{(props.page.showsignUp)? 
					<SignUp SignUp={props.SignUp}
							user={props.user} />:
					null}
				{(props.page.showaddmenu)?
					<Addmenu/>:
					null
				}
			</div>
	)
  }

function mapStateToProps(state){
	return state;
};
export default connect(mapStateToProps)(App);

