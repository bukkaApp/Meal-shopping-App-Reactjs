const initialstate={
	showsignIn:false,
	showsignUp:false,
};

const showPage=(state=initialstate,action)=>{
	switch(action.type){
		case'SIGN_IN':{
			return{...state,showsignIn:!action.payload,showsignUp:false};
			break;
		}
		case'SIGN_UP':{
			return{...state,showsignUp:!action.payload,showsignIn:false};
			break;
		}
		default:
		return state;
	}
}
export default showPage;