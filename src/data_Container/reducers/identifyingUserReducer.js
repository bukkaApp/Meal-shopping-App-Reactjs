const initialstate={
	fetching:false,
	fetched:false,
	fetching_lastCardDigits:false,
	fetched_lastCardDigits:false,
	fetching_addcard:false,
	fetched_addcard:false,
	user:{},
	lastCardDigits:"",
	isAuthenticated:false,
	error:null
};

const identifyUser=(state=initialstate,action)=>{
	switch(action.type){
		case'IDENTIFYING_USER_PENDING':{
			return{...state,fetching:true};
			break;
		}
		case'ADD_CARD_PENDING':{
			return{...state,fetching_addcard:true};
			break;
		}
		case'UPDATING_USER_INFORMATION_PENDING':{
			return{...state,fetching_lastCardDigits:true,isAuthenticated:false};
			break;
		}
		case'UPDATING_USER_INFORMATION_REJECTED':{
			return{...state,fetching_lastCardDigits:false,lastCardDigits:"",error:action.payload,isAuthenticated:true};
			break;
		}
		case'ADD_CARD_REJECTED':{
			return{...state,fetching_addcard:false,fetched_addcard:false,error:action.payload};
			break;
		}
		case'IDENTIFYING_USER_REJECTED':{
			return{...state,fetching:false,user:{},isAuthenticated:false,lastCardDigits:"",error:action.payload};
			break;
		}
		case'IDENTIFYING_USER_FULFILLED':{
			return{...state,lastCardDigits:"",fetched:true,fetching:false,user:action.payload.data.data,error:null};
			break;
		}
		case'UPDATING_USER_INFORMATION_FULFILLED':{
			return{...state,fetching_lastCardDigits:false,fetched_lastCardDigits:true,lastCardDigits:action.payload.data.data.last,isAuthenticated:true,error:null};
			break;
		}
		case'ADD_CARD_FULFILLED':{
			return{...state,fetching_addcard:false,fetched_addcard:true,lastCardDigits:action.payload,error:null};
			break;
		}
		case 'SIGN_OUT':{
			return{...initialstate}
			break;
		}
	}
	return state;
};

export default identifyUser;

