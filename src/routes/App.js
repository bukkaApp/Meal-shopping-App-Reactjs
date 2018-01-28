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
import '../homepage/Appstyle.css'
import HeaderMin from '../frontpage/HeaderMin'
import Cuisine from '../frontpage/cuisine'
import CartPanel from '../frontpage/cartPanel_mobile'
import ErrorChef from './Error'
import OptionLeaf from '../frontpage/OptionLeaf'
import {mapStateToProps} from '../util/ajax'
import First from '../frontpage/FirstPagePreloader'


const App =(props)=> {
return (
	(props.chef.error)?
		<ErrorChef  />:
		(!props.chef.fetched)? 
		(props.chef.fetched_chefAndCuisine)?
			<div className="devi aah">
				<HeaderMin/>
				<Cuisine/>
				<Footer/>
				<OptionLeaf/>
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
					<OptionLeaf/>	
					{(props.page.showfirstpageloader)?
						<First/>:
						null
					}
				</div>
			</div>:
			<div className="devi">
				<ScrollLogic 	chef_fetched={props.chef.fetched}
								Located={props.address.Located}		 />
				<MenuPage chef={props.chef}/>
				<CartPanel/>
				<MenuItems	chef={props.chef} /> 
				<Footer/>
				<OptionLeaf/>
			</div>
	)
  }
  
export default connect(mapStateToProps)(App)

