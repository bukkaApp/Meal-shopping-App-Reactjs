import React from 'react'
import './style/index.css'
import App from './routes/App'
import {BrowserRouter , Route, Switch} from 'react-router-dom'
import { Provider } from 'react-redux'
import PropTypes from 'prop-types'
import Authenticatedroute from './routes/AuthenticatedRoute'
import EventHome from './homepage/eventHome'
import Checkoutpagedecider from './routes/Checkoutpagedecider'
import Error_ from './routes/Error'
import Receipt from './routes/receipthandler'
import Testo from './testo'



const Root = ({ store }) => (
	<Provider store={store}>
	<BrowserRouter>
	<Switch>
		<Route exact path="/" component={App}/>
		<Route exact path="/profile" component={Authenticatedroute} />
		<Route exact path="/checkout" component={Checkoutpagedecider}/>
		<Route exact path="/event" component={EventHome} />
		<Route exact path="/error" component={Error_} />
		<Route exact path="/receipt" component={Receipt} />
		<Route component={Testo} />
	</Switch>
	</BrowserRouter>
	</Provider>
	);

Root.propTypes = {
  store: PropTypes.object.isRequired
};
export default Root;