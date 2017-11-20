import {applyMiddleware,createStore} from './redux';
import reducers from'./reducers/combinedreducers';
import promise from 'redux-promise-middleware';
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger';


const middleware=applyMiddleware(promise,thunk,logger);

export default createStore(reducers,middleware);