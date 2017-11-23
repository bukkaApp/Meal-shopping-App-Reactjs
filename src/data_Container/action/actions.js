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
export const fetch_chef_pending=()=>({
	type:'GET_CHEFS_PENDING'
})
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