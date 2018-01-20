import {applyMiddleware,createStore} from 'redux'
import reducers from'./reducers/combinedreducers'
import promise from 'redux-promise-middleware'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { loadState,saveState } from './localStorage'
import throttle from 'lodash/throttle'


const middleware=applyMiddleware(promise(),thunk,logger)
const persistedState=loadState()

const store=(persistedState)?
                createStore(reducers,persistedState,middleware):
                createStore(reducers,middleware)

store.subscribe(throttle(()=>{
   saveState({
                address:store.getState().address,
                chef:store.getState().chef,
                cart:store.getState().cart,
                user:store.getState().user,
                page:store.getState().page,
                SignUp:store.getState().SignUp,
                receipt:store.getState().receipt,
                menuinview:store.getState().menuinview     })
},1000))

export default store;

