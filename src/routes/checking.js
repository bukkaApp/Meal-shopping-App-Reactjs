import React, { Component } from 'react';
import '../style/App.css';
import '../style/index.css';
import PageBackground from '../frontpage/PageBackground';
import CheckoutPage from '../checkout/checkoutPage';
import CheckoutSlip from '../checkout/checkoutSlip';
import {connect} from 'react-redux';
import HeaderCheckout from '../frontpage/HeaderCheckout';
import SignIn from '../authentication/signIn';
import SignUp from '../authentication/SignUp';
import AddCard from '../checkout/addCard';
import Footer from '../frontpage/Footer';
import Receipt from '../frontpage/receipt';
import lib from '../util/lib'

class Checking extends Component{
	constructor(props){
		super(props);
	}
	
	render(){
		return(
			(this.props.receipt.receiptGenerated)?
				<div className="devi">
					<HeaderCheckout  />
					
					<PageBackground loc={(this.props.address.lat!=="")?
											[this.props.address.lat,this.props.address.lng]:
											[6.4531,3.3958]
										}/> 
					<div id="checking-content">
						<Receipt/>
					</div>										
					<Footer/>	
				</div>:
				<div className="devi">
					
					<HeaderCheckout  />
					
					<PageBackground loc={(this.props.address.lat!=="")?
											[this.props.address.lat,this.props.address.lng]:
											[6.4531,3.3958]}/> 
					<div id="checking-content-holder">
					<CheckoutPage 	user={this.props.user}
									address={this.props.address} /> 
					<CheckoutSlip />
					</div>
					
					
					{(this.props.page.showsignIn)? 
						<SignIn  user={this.props.user}/>:
						null
					}
															
					{(this.props.page.showsignUp)? 
						<SignUp  	SignUp={this.props.SignUp}
									user={this.props.user}/>:
						null
					}
					{(this.props.page.showaddCard)? 
						<AddCard 	user={this.props.user}/>:
						null
					}											
					<Footer/>
					
				</div>
			)
	}
}


function mapStateToProps(state){
	return state;
};
export default connect(mapStateToProps)(Checking)