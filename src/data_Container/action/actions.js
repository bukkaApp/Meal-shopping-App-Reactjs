import axios from 'axios'
import ajx from '../../util/ajax'

//forgot Password
export const forgot_password=(_)=>({
	type:"FORGOT_PASSWORD",
	payload:axios.post(ajx.forgot_password,{_})
})
//sign in
export const identify_user=(email,password)=>({
	type:'IDENTIFYING_USER',
	payload:axios.post(ajx.loginendpoint,{email,password})
})
//signup
export const signup=(email,firstname,lastname,password,mobile,isCustomer)=>({
	type:'SIGN_UP',
	payload:axios.post(ajx.signupendpoint,{email,firstname,lastname,password,mobile,isCustomer})
})

//get card details
//takes uid as argument
export const updating_user_info=(uid)=>({
	type:'UPDATING_USER_INFORMATION',
	payload:axios.get(ajx.carddtlsendpoint+uid)
})

//fetch list of chefs
export const fetch_chef=(latLng)=>({
	type:'GET_CHEFS',
	payload:axios.get(ajx.chefendpoint+latLng.lat+"/"+latLng.lng)
})

//menu in view info
export const menuview=(_)=>({
	type:'ADD_MENU_IN_VIEW',
	payload:_
})
//add new transaction
export const transaction=(_)=>({
	type:'ADD_NEW_TRANSACTION',
	payload:_
})
//clear transaction object
export const cleartransaction=()=>({
	type:'CLEAR_TRANSACTION',
	payload:[]
})
//place order
export const order=(_)=>({
	type:'ORDER_STATUS',
	payload:Promise.all(_)
})
export const chef_Cuisine=(_)=>({
	type:'GET_CHEF_AND_CUISINE',
	payload:_
})
export const fetch_address=(add,latLng)=>({
		type:'FETCH_ADDRESS',
		payload:{address:add,lng:latLng.lng,lat:latLng.lat}
})
export const show_receipt=(receipt)=>({
	type:'RECEIPT',
	payload:receipt
});
export const get_chef=(chef)=>({
	type:'GET_CHEFS_UPDATE',
	payload:chef
});
export const showsignIn=(signin)=>({
	type:'SIGN_IN',
	payload:signin
});
export const showsignUp=(signup)=>({
	type:'SIGN_UP',
	payload:signup
});
export const showaddCard=(addCard)=>({
	type:'ADD_CARD_PAGE',
	payload:addCard
});
export const showaddmenu=(addmenu)=>({
	type:'ADD_MENU',
	payload:addmenu
});
export const showDifChefsError=(p)=>({
	type:'DIF_CHEF_ERROR',
	payload:p
})
export const showpaymentinfo=(_)=>({
	type:'PAYMENT_INFO',
	payload:_
})
export const showorderhistory=(_)=>({
	type:'ORDER_HISTORY',
	payload:_
})
export const shownotification=(_)=>({
	type:'NOTIFICATION',
	payload:_
})
export const showbasicinformation=(_)=>({
	type:'BASIC_INFORMATION',
	payload:_
})
export const showforgotpassword=(_)=>({
	type:'FORGOT_PASSWORD_PAGE',
	payload:_
})
export const signout=()=>({
	type:'SIGN_OUT'
});

export const addcard=(response)=>({
	type:'ADD_CARD',
	payload:response
});

export const orderhistory=(response)=>({
	type:'FETCH_ORDER_HISTORY',
	payload:response
});
export const update_cart=(response)=>({
	type:'UPDATE_CART',
	payload:response
});
export const get_chef_update_failed=(response)=>({
	type:'GET_CHEFS_UPDATE_FAILED',
	payload:response
});
export const clear_receipt=()=>({
	type:'CLEAR_RECEIPT'
});
export const add_receipt=(receipt)=>({
	type:'ADD_RECEIPT',
	payload:receipt
});
export const delete_cart=()=>({
	type:'DELETE_CART'
})
