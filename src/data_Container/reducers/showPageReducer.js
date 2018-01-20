const initialstate={
	showsignIn:false, 
	showsignUp:false,
	showaddCard:false,
	showaddmenu:false,
	showreceipt:false,
	showpaymentinfo:false,
	showorderhistory:false,
	shownotification:false,
	showbasicinformation:true,
	showdifcheferror:false,
	showforgotpasswordpage:false
};

const showPage=(state=initialstate,action)=>{
	switch(action.type){
		case'SIGN_IN':{
			return{	...state,
					showsignIn:!action.payload,
					showsignUp:false,
					showaddCard:false,
					showreceipt:false,
					showaddmenu:false	}
		}
		case 'DIF_CHEF_ERROR':{
			return{
				...state, 
				showdifcheferror:!action.payload
			}
		}
		case 'FORGOT_PASSWORD_PAGE':{
			return{
				...state,
				showforgotpasswordpage:!action.payload
			}
		}
		case'RECEIPT':{
			return{	...state, 
					showsignUp:false,
					showsignIn:false,
					showaddCard:false,
					showaddmenu:false,
					showreceipt:!action.payload	}
		}
		case'SIGN_UP':{
			return{	...state,
					showsignUp:!action.payload,
					showsignIn:false,
					showaddCard:false,
					showaddmenu:false,
					showreceipt:false	}
		}
		case'ADD_CARD_PAGE':{
			return{	...state,
					showaddCard:!action.payload,
					showsignIn:false,
					showsignUp:false,
					showaddmenu:false,
					showreceipt:false	}
		}
		case 'ADD_MENU':{
			return{	...state,
					showaddCard:false,
					showsignIn:false,
					showsignUp:false,
					showaddmenu:!action.payload,
					showreceipt:false}
		}
		case'PAYMENT_INFO':{
			return{	...state,
					showpaymentinfo:!action.payload,
					showorderhistory:false,
					shownotification:false,
					showbasicinformation:false	}
		}
		case'ORDER_HISTORY':{
			return{	...state,
					showpaymentinfo:false,
					showorderhistory:!action.payload,
					shownotification:false,
					showbasicinformation:false	}
		}
		case'NOTIFICATION':{
			return{	...state,
					showpaymentinfo:false,
					showorderhistory:false,
					shownotification:!action.payload,
					showbasicinformation:false	}
		}
		case'BASIC_INFORMATION':{
			return{	...state,
					showpaymentinfo:false,
					showorderhistory:false,
					shownotification:false,
					showbasicinformation:!action.payload	}
		}
		
		default:
		return state
	}
}
export default showPage;