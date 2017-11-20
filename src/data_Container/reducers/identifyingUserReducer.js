const initialstate={
	fetching:false,
	fetched:false,
	user:{},
	error:null
};

export default const identifyUser=(state=initialstate,action)=>{
	switch(action.type){
		case'IDENTIFYING_USER_PENDING':{
			return{state,fetching:true};
			break;
		}
		case'IDENTIFYING_USER_REJECTED':{
			return{state,fetching:false,error:action.payload};
			break;
		}
		case'IDENTIFYING_USER_FULFILLED':{
			return{state,fetching:false,fetched:true,user:action.payload};
			break;
		}
	}
	return state;
}

