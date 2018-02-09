import React, { Component } from 'react';
import '../style/profile.css';
import lib from '../util/lib';
import {mapStateToProps} from '../util/ajax';
import {connect} from 'react-redux';

export default class basicinformation extends Component{

	render(){
		return(
			<div className="row m-content-holder">
				<div className="col-md-4 m-left">
					<h3>Basic Information</h3>
					<div className="l-profile-photo-holder">
						<img src="https://d1w2poirtb3as9.cloudfront.net/default.jpeg" alt="" className="profile-photo"/>
						
					    <input type="file" accept="image/*" className="profile-photo-selector"/>
					</div>
				</div>
				<form className="col-md-8 input-holder m-right" autoComplete="on">
					<input placeholder="First Name" type="text" id="FirstName"/>
					<input placeholder="Last Name" type="text" id="LastName"/>
					<input placeholder="Mobile Number" type="tel" id="MobileNumber"/>
					<input placeholder="Email" type="email" id="email"/>
					<button id="update-profile" onClick={lib.edit_user}>Update Profile</button>
					<input placeholder="Enter Current Password" type="password" id="oldPassword"/>
					<input placeholder="Enter New Password" type="password" id="newPassword"/>
					<input placeholder="Confirm Password" type="password" id="ConfirmPassword"/>
					<button id="change-password">Change Password</button>
				</form>
			</div>
			)
	}
}