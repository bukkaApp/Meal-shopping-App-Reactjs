
import React from 'react';
import '../style/App.css'
import SimpleForm from './autoComplete'
import {Link} from 'react-router-dom'
import lib from '../util/lib'
import {connect} from 'react-redux'
import ajx from '../util/ajax'

const HeaderMax=(props)=>{
return(
	<div id='head' className="myheader ab">
		<Link to="/">
			<img 	src={ajx.logo} 
					id="logo" 
					alt="logo"/>
		</Link>
		{(!props.user.isAuthenticated)? 
			<div className="header-top-button">
				<button className="max-sign-in" 
						onClick={()=>lib.toggleSignin()}>
					Sign In
				</button>
				<button className="btn-red max-sign-up" 
						onClick={()=>lib.toggleSignUp()} >
					Sign Up
				</button>
			</div>:
			<div className=" m-info">
				<div className="m-profile-photo-holder hh">
					<div className="m-user-icon-holder display-toggle">
						<img 	src={props.user.user.profile_photo} 
								 alt="" 
								 className="m-profile-photo"/>
					</div>
					<div className="m-profile-options display-toggle">
						<Link 	to="/profile" 
								className="lin m-options" >
							Account
						</Link>
						<a 	className="m-options" 
							onClick={lib.signout}>
							Log Out
						</a>
					</div>
				</div>
			</div>
		}
		<p id="search-text">
			<b>Find the food that matches your taste around you</b>
		</p>
		<div className="search-box max-search fdp">
			<SimpleForm chefResult={props.chefResult}/>
		</div>
	</div>
	)
}

function mapStateToProps(state){
	return state
}
export default connect(mapStateToProps)(HeaderMax)