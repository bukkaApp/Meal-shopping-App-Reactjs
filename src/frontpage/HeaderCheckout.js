import React, { Component } from 'react'
import '../style/App.css';
import SimpleForm from './autoComplete'
import {Link} from 'react-router-dom'
import lib from '../util/lib'
import {connect} from 'react-redux'
 

const HeaderCheckout=(props)=>{
		return(
			<div  className="myheader header-min bc">
				<Link to="/"><img src="http://res.cloudinary.com/www-mybukka-com/image/upload/v1505151382/logo_m8ik1x.png" id="logo" alt="logo"/></Link>
				<div className="search-box search-box-min">
					{(props.chef.error!==null)? <SimpleForm />:null}
				</div>
				{(!props.user.isAuthenticated)? 
					null:
					<div className=" m-info small-head">
						<div className="m-profile-photo-holder hh">
							<div className="m-user-icon-holder display-toggle">
								<img src={props.user.user.profile_photo} alt="" className="m-profile-photo"/>
							</div>
							<div className="m-profile-options display-toggle">
								<Link to="/profile" className="lin m-options" >Account</Link>
								<a className="m-options" onClick={lib.signout}>Log Out</a>
							</div>
						</div>
					</div>
				}
			</div>
			)
	}
function mapStateToProps(state){
	return state
}

export default connect(mapStateToProps)(HeaderCheckout)