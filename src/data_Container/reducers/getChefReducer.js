const initialstate={
	fetching:false,
	fetched:false,
	chefsInYourArea:{},
	yourChef:{},
	error:null
};

export default const getChefs=(state=initialstate,action)=>{
	switch(action.type){
		case'GET_CHEFS_PENDING':{
			return{state,fetching:true};
			break;
		}
		case'GET_CHEFS_REJECTED':{
			return{state,fetching:false,error:action.payload};
			break;
		}
		case'GET_CHEFS_FULFILLED':{
			return{
				state,
				fetching:false,
				fetched:true,
				chefsInYourArea:action.payload.chefsInYourArea,
				yourChef:action.payload.yourChef,
				error:null
			}
			break;
		}
		return state

	}
}