import React,{Commponent} from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import Root from './root';
import reducers from './data_Container/reducers/combinedreducers'
import storage from './data_Container/store'


let store=storage;
store.subscribe(()=>console.log(store.getState()));
ReactDOM.render(
	<Root store={store}  />, 
	document.getElementById('board'));
