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
import SimpleForm from './autoComplete';
import HeaderStories from './headerStories';
import MenuPage from './menuPage';
import MenuItems from './menuItems';
import ShoppingCart from './shoppingCart'


ReactDOM.render(<BrowserRouter>
	<Switch>
		<Route exact path="/" component={App}/>
		<Route exact path="/M" component={MenuItems}/>
	</Switch>
</BrowserRouter>, document.getElementById('board'));

