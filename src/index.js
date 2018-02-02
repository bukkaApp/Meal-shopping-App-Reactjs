import React from 'react'
import ReactDOM from 'react-dom'
import './style/index.css'
import Root from './root'
import storage from './data_Container/store'

ReactDOM.render(
	
	<Root store={storage}  />, 
	document.getElementById('board'));
