const initialstate={
	cart:{},
	total:0.00
};

export default const updateCart=(state=initialstate,action)=>{
	switch(action.type){
		case'UPDATE_CART':{
			return{state,cart:action.payload.cart,total:action.payload.total};
			break;
		}
	}
	return state;
}