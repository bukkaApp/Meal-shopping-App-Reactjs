const initialstate={
	showsignIn:false,
	showsignUp:false,
	showaddCard:false,
	showaddmenu:false
};

const showPage=(state=initialstate,action)=>{
	switch(action.type){
		case'SIGN_IN':{
			return{...state,showsignIn:!action.payload,showsignUp:false,showaddCard:false,showaddmenu:false};
			break;
		}
		case'SIGN_UP':{
			return{...state,showsignUp:!action.payload,showsignIn:false,showaddCard:false,showaddmenu:false};
			break;
		}
		case'ADD_CARD_PAGE':{
			return{...state,showaddCard:!action.payload,showsignIn:false,showsignUp:false,showaddmenu:false};
			break;
		}
		case 'ADD_MENU':{
			return{...state,showaddCard:false,showsignIn:false,showsignUp:false,showaddmenu:!action.payload};
			break;
		}
		default:
		return state;
	}
}
export default showPage;