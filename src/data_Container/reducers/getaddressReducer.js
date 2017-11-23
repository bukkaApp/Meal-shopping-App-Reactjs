const initialstate={
			lng:"",
			lat:"",
			Location:"",
			error:null,
			Located:false
};

const getaddress=(state=initialstate,action)=>{
			switch(action.type){
				case 'FETCH_ADDRESS':{
					return{
						...state,
						lng:action.payload.lng,
						lat:action.payload.lat,
						Location:action.payload.address,
						Located:true
					}
				}
				default:{return state}
			}
};

export default getaddress;