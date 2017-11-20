export const state_update=(state)=>({
		type: 'state',
		payload:state
	});
export const fetch_address=(address)=>({
	type:'FETCH_ADDRESS',
	payload:address
});
export const fetch_chef=(chef)=>({
	type:'GET_CHEFS',
	payload:chef
});
export const identify_user=(user)=>({
	type:'IDENTIFYING_USER'
	payload:user
});
