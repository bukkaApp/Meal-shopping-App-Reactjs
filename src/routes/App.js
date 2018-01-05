import React, { Component } from 'react'
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
import Home from '../homepage/Home'
import Map from '../homepage/Map'
import Reg from '../homepage/Reg'
import Nochefavailable from '../frontpage/nochef'
import Cuisine from '../frontpage/cuisine'
import Addmenu from '../frontpage/addmenu'
import lib from '../util/lib'


class App extends Component {
	constructor(props) {
		super(props);
		this.state={address:this.props.address,
					chef:this.props.chef,
					cart:this.props.cart,
					user:this.props.user,
					page:this.props.page,
					signup:this.props.SignUp,
					};
	}
		
  render() {
    return (
		(this.props.chef.error)?
			<Nochefavailable  />:
		(!this.props.chef.fetched)? 
			<div style={{position:'absolute'}}> 
				<ScrollLogic chef_fetched={this.props.chef.fetched} />
				<div className="first-page-background">
					<PageBackground />
				</div>
				<div className="dev">
					<SummaryComponent/>
					<MobileAppComponent/>
					<Footer/>
					{(this.props.page.showsignIn)? 
						<SignIn user={this.props.user}/>:
						null
					}
					{(this.props.page.showsignUp)? 
						<SignUp SignUp={this.props.SignUp}
								user={this.props.user}/>:
						null
					}	
				</div>
			</div>:
			<div className="devi">
				<ScrollLogic chef_fetched={this.props.chef.fetched} />
				<MenuPage chef={this.props.chef}/>
				<MenuItems	chef={this.props.chef} />
				<Footer/>
				{(this.props.page.showsignIn)? 
					<SignIn user={this.props.user} /> :
					null
				}
				{(this.props.page.showsignUp)? 
					<SignUp SignUp={this.props.SignUp}
							user={this.props.user} />:
					null}
				{(this.props.page.showaddmenu)?
					<Addmenu/>:
					null
				}
			</div>
    	);
  }
};

function mapStateToProps(state){
	return state;
};
export default connect(mapStateToProps)(App);

