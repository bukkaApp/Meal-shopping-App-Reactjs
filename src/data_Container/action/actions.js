import axios from 'axios'
import ajx from '../../util/ajax'


//sign in
export const identify_user=(email,password)=>({
	type:'IDENTIFYING_USER',
	payload:axios.post(ajx.loginendpoint,{email,password})
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

export const fetch_address=(address)=>{
	return{
		type:'FETCH_ADDRESS',
		payload:address
	}
};



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
export const signout=()=>({
	type:'SIGN_OUT'
});
export const signup=(email,firstname,lastname,password,mobile,isCustomer)=>({
	type:'SIGN_UP',
	payload:axios.post(ajx.signupendpoint,{email,firstname,lastname,password,mobile,isCustomer})
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