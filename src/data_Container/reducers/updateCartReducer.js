const initialstate={
	cart:{},
	total:0.00
};

const updateCart=(state=initialstate,action)=>{
	switch(action.type){
		case'UPDATE_CART':{
			return{cart:{...state.cart,...action.payload.cart},total:action.payload.total};
			break;
		}
		case'DELETE_CART':{
			return{...initialstate}
		}
	}
	return state;
};
export default updateCart;