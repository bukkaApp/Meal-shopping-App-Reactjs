import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './routes/App';
import {BrowserRouter , Route, Switch} from 'react-router-dom';
import Profile from './routes/profile';


ReactDOM.render(<BrowserRouter>
	<Switch>
		<Route exact path="/" component={App}/>
		<Route exact path="/profile" component={Profile}/>
	</Switch>
</BrowserRouter>, document.getElementById('board'));

