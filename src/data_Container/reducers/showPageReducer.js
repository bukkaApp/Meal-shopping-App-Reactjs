const initialstate={
	showsignIn:false,
	showsignUp:false,
	showaddCard:false
};

const showPage=(state=initialstate,action)=>{
	switch(action.type){
		case'SIGN_IN':{
			return{...state,showsignIn:!action.payload,showsignUp:false,showaddCard:false};
			break;
		}
		case'SIGN_UP':{
			return{...state,showsignUp:!action.payload,showsignIn:false,showaddCard:false};
			break;
		}
		case'ADD_CARD_P':{
			return{...state,showaddCard:!action.payload,showsignIn:false,showsignUp:false};
			break;
		}
		default:
		return state;
	}
}
export default showPage;