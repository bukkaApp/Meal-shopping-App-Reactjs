import React, { Component } from 'react';
import '../style/App.css';
import SimpleForm from './autoComplete';
import {Link} from 'react-router-dom';


export default class HeaderMin extends Component{
	render(){
		return(
			<div  className="myheader header-min bc">
				<Link to="/"><img src="http://res.cloudinary.com/www-mybukka-com/image/upload/v1505151382/logo_m8ik1x.png" id="logo" alt="logo"/></Link>
				<div className="search-box search-box-min">
				{(this.props.error!==null)? <SimpleForm chefResult={this.props.chefResult} />:null}
				</div>
				{(!this.props.user.isAuthenticated)? null:
															(<div className=" m-info small-head">
																<div className="m-profile-photo-holder hh">
																	<div className="m-user-icon-holder display-toggle">
																	<img src={this.props.user.user.profile_photo} alt="" className="m-profile-photo"/>
																	</div>
																	<div className="m-profile-options display-toggle">
																		<Link to="/profile" className="lin m-options" >Account</Link>
																		<a className="m-options" onClick={this.props.signout}>Log Out</a>
																	</div>
																</div>
															</div>
														)

														}

			</div>
			)
	}
}
