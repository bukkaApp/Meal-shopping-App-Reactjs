import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import HeaderMax from './HeaderMax';
import HeaderMin from './HeaderMin';
import PageBackground from './PageBackground';
import Footer from './Footer';
import ScrollLogic from './ScrollLogic';
import ChefComponent from './chefComponent';
import MobileAppComponent from './mobileAppComponent';
import SummaryComponent from './summaryComponent';
import {BrowserRouter , Route, Switch} from 'react-router-dom';


ReactDOM.render(<BrowserRouter>
	<Switch>
		<Route exact path="/" component={App}/>
	</Switch>
</BrowserRouter>, document.getElementById('board'));

