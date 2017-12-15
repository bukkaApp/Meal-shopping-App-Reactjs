export const fetch_address=(address)=>{
	return{
		type:'FETCH_ADDRESS',
		payload:address
	}
};
export const fetch_chef=(chef)=>({
	type:'GET_CHEFS',
	payload:chef
});
export const identify_user=(user)=>({
	type:'IDENTIFYING_USER',
	payload:user
});
export const updating_user_info=(user)=>({
	type:'UPDATING_USER_INFORMATION',
	payload:user
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
export const signup=(success)=>({
	type:'SIGN_UP',
	payload:success
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
})