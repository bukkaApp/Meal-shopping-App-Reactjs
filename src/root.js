import React,{Commponent} from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './routes/App';
import {BrowserRouter , Route, Switch} from 'react-router-dom';
import Profile from './routes/profile';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import Checking from './routes/checking';
import Authenticatedroute from './routes/AuthenticatedRoute';
import EventHome from './homepage/eventHome';
import Menupage from './menu/menuPage';
import Nochefavailable from './frontpage/nochef';




const Root = ({ store }) => (
	<Provider store={store}>
	<BrowserRouter>
	<Switch>
		<Route exact path="/" component={App}/>
		<Route exact path="/profile" component={Authenticatedroute} />
		<Route exact path="/checkout" component={Checking}/>
		<Route exact path="/event" component={EventHome} />
		<Route exact path="/menu" component={Nochefavailable} />
	</Switch>
	</BrowserRouter>
	</Provider>
	);

Root.propTypes = {
  store: PropTypes.object.isRequired
};
export default Root;