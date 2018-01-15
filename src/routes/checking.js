import React from 'react'
import '../style/App.css'
import '../style/index.css'
import PageBackground from '../frontpage/gmap'
import CheckoutPage from '../checkout/checkoutPage'
import CheckoutSlip from '../checkout/checkoutSlip'
import {connect} from 'react-redux'
import HeaderCheckout from '../frontpage/HeaderCheckout'
import SignIn from '../authentication/signIn'
import SignUp from '../authentication/SignUp'
import AddCard from '../checkout/addCard'
import Footer from '../frontpage/Footer'
import Receipt from '../frontpage/receipt'

const Checking =(props)=>{
	return(
		(props.receipt.receiptGenerated)?
			<div className="devi">
				<HeaderCheckout  />
				
				<PageBackground bloc={{lat:props.address.lat,lng:props.address.lng}}
								aloc={{lat:props.chef.yourChef.coords.lat,lng:props.chef.yourChef.coords.lng}}	/> 
				<div id="checking-content">
					<Receipt/>
				</div>										
				<Footer/>	
			</div>:
			<div className="devi">
				
				<HeaderCheckout  />
				
				<PageBackground one={true} bloc={{lat:props.address.lat,lng:props.address.lng}} /> 
				<div id="checking-content-holder">
				<CheckoutPage 	user={props.user}
								address={props.address} /> 
				<CheckoutSlip />
				</div>
				
				
				{(props.page.showsignIn)? 
					<SignIn  user={props.user}/>:
					null
				}
														
				{(props.page.showsignUp)? 
					<SignUp  	SignUp={props.SignUp}
								user={props.user}/>:
					null
				}
				{(props.page.showaddCard)? 
					<AddCard 	user={props.user}/>:
					null
				}											
				<Footer/>
				
			</div>
		)
}


function mapStateToProps(state){
	return state
}
export default connect(mapStateToProps)(Checking)