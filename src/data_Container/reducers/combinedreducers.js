import {combineReducers} from './redux';
import getaddress from  './getaddressReducer';
import getChefs from './getChefReducer';
import updateCart from './updateCartReducer';
import identifyUser from './identifyingUserReducer'


export default combineReducers({
	address:getaddress,
	chef:getChefs,
	cart:updateCart,
	user:identifyUser
		});