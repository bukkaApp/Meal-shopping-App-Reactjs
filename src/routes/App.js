import React from 'react'
import '../style/App.css'
import '../style/index.css'
import PageBackground from '../frontpage/PageBackground'
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


const App =(props)=> {
return (
	(props.chef.error)?
		<Nochefavailable  />:
		(!props.chef.fetched)? 
			<div style={{position:'absolute'}}> 
				<ScrollLogic chef_fetched={props.chef.fetched} />
				<div className="first-page-background">
					<PageBackground />
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
				<ScrollLogic chef_fetched={props.chef.fetched} />
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

