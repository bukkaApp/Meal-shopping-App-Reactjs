const initialstate={
	fetching:false,
	fetched:false,
	chefsInYourArea:{},
	yourChef:{},
	menuCategoriesKeys:[],
	menuCategories:[],
	error:null
};

const getChefs=(state=initialstate,action)=>{
	switch(action.type){
		case'GET_CHEFS_PENDING':{
			return{
				...state,
				fetching:true};
			break;
		}
		case'GET_CHEFS_REJECTED':{
			return{
				...state,
				fetching:false,
				error:action.payload.response.data,
				chefsInYourArea:{},
				yourChef:{},
				menuCategoriesKeys:[],
				menuCategories:[],
				};
			break;
		}
		case'GET_CHEFS_FULFILLED':{
			return{
				...state,
				fetching:false,
				fetching:true,
				chefsInYourArea:action.payload.data,
				error:null
			}
			break;
		}
		case 'GET_CHEFS_UPDATE':{
			return{
				...state,
				fetching:false,
				fetched:true,
				yourChef:action.payload.yourChef,
				menuCategoriesKeys:action.payload.categ,
				menuCategories:action.payload.menu,
				error:null
			}
			break;
		}
	}
	return state
};

export default getChefs;