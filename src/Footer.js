import React, { Component } from 'react';
import logo from './logo.svg';
import './foot.css';
import fetch from 'node-fetch';
import PropTypes from 'prop-types';
import TiSocialFacebook from 'react-icons/lib/ti/social-facebook';
import TiSocialTwitter from 'react-icons/lib/ti/social-twitter';
import TiSocialLinkedin from 'react-icons/lib/ti/social-linkedin';
import TiSocialYoutube from 'react-icons/lib/ti/social-youtube'

export default class Footer extends Component{
	constructor(props) {
		super(props);
		
	}
	render(){
		return(
			<div className="foot">
				<div className="roww">
					<div className="col">
						<div className="child-row">
							<img src="http://res.cloudinary.com/www-mybukka-com/image/upload/q_100/v1505151382/logo_m8ik1x.png" alt="myBukka Logo"/>
						</div>
						<p></p>
						<p></p>
						<p></p>
					</div>	
					<div className="col">
						<div className="child-row">
							<p></p>
						</div>
						<p></p>
						<p></p>
						<p></p>
					</div>	
					<div className="col">
						<div className="child-row">
							
						</div>
						<p></p>
						<p></p>
					</div>	
					<div className="col">
						<div className="child-row">
							<p></p>
						</div>
						<ul className="socialmedia">
							<li><a href=""><TiSocialFacebook /></a></li>
							<li><a href=""><TiSocialTwitter /></a></li>
							<li><a href=""><TiSocialLinkedin /></a></li>
							<li><a href=""><TiSocialYoutube /></a></li>
						</ul>
					</div>					
				</div>
				<div className="img-holder">
					<img src="http://res.cloudinary.com/www-mybukka-com/image/upload/q_100/v1508342712/appstore_bkvsi2.png" class="img-responsive" alt="Play Store logo"/>
					<img src="http://res.cloudinary.com/www-mybukka-com/image/upload/q_100/v1508504845/c4c51cdd9a95bdb0c488ff0a013c865c_smq7g5.png" class="img-responsive" alt="Play Store logo"/>
				</div>
				<div className="foot-finale-holder">
					<div className="foot-finale">
					<p></p>
					<p></p>
					</div>
				</div>
			</div>
			)
	}
}