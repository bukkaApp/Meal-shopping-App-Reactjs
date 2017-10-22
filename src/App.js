import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './index.css';
import HeaderMax from './HeaderMax';
import HeaderMin from './HeaderMin';
import PageBackground from './PageBackground';
import Footer from './Footer';
import ScrollLogic from './ScrollLogic';
import ChefComponent from './chefComponent';
import MobileAppComponent from './mobileAppComponent';
import SummaryComponent from './summaryComponent';

class App extends Component {
  render() {
    return (<div className="dev"><ScrollLogic/><PageBackground/><SummaryComponent/><MobileAppComponent/><ChefComponent/><Footer/></div>);
  }
}

export default App;
