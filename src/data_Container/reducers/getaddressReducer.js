const initialstate={
			fetching:false,
			fetched:false,
			lon:"",
			lat:"",
			Location:"",
			error:null
};

export default const getaddress=(state=initialstate,action)=>{
			switch(action.type){
				case 'FETCH_ADDRESS_PENDING':{
					return{state,fetching:true}
					break;
				}
				case 'FETCH_ADDRESS_REJECTED':{
					return{state,fetching:false,error:action.payload}
					break;
				}
				case 'FETCH_ADDRESS_FULFILLED':{
					return{
						state,
						fetching:false,
						fetched:true,
						lon:action.payload.lng,
						lat:action.payload.lat,
						Location:action.payload.address,
						error:null
						}
					break;
				}
			}
			return state
}