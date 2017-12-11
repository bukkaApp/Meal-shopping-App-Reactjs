import React, { Component } from 'react';
import '../style/mobileAppComponent.css';
import pic from '../assets/app5.png'

export default class mobileAppComponent extends Component{
	render(){
		return(
				<div className="mobileAppImage-holder">
					<div className="row">
						<div className="col-sm-6 m-app-store">
							<h1>Crave. Tap. Enjoy.</h1>
							<p>With the MyBukka app, your favourite meal are always a tap away.</p>
							<br/>
							<br />
							<h3>DOWNLOAD THE APP</h3>
							<br />
							<a href="#"><img className="appleapp" src='http://res.cloudinary.com/www-mybukka-com/image/upload/v1508504845/c4c51cdd9a95bdb0c488ff0a013c865c_smq7g5.png' alt="applestore"/></a> <a href="#"><img className="googleapp" src='http://res.cloudinary.com/www-mybukka-com/image/upload/v1508342712/appstore_bkvsi2.png' alt="googleplay"/></a>
						</div>
						<div className="col-sm-6">
							<img className="pic" src={pic} alt="app5"/>
						</div>
					</div>
				</div>
			)
	}
}