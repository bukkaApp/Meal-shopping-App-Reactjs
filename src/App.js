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
import MenuPage from './menuPage'
import MenuItems from './menuItems'

class App extends Component {
	constructor(props) {
		super(props);
		this.state={
			address:'',
			searchResult:null,
			cart:'no items in the cart'
		}
	}
	searchResultForParent=(result)=>{
		this.setState({searchResult:result});
		console.log(result);
	}
	addressForParent=(adr)=>{
		this.setState({address:adr});
		console.log(adr);
	}
	updateCart=(cart)=>{
		this.setState({cart:cart})
		console.log(cart);
	}
	
  render() {
    return (
    	(this.state.address=='')? <div className="dev"><ScrollLogic address={this.state.address} searchResultForParent={this.searchResultForParent} addressForParent={this.addressForParent} /><PageBackground /><SummaryComponent/><MobileAppComponent/><ChefComponent/><Footer/></div>:
    								<div className="dev"><ScrollLogic address={this.state.address} searchResultForParent={this.searchResultForParent} addressForParent={this.addressForParent} /><MenuPage/><MenuItems updateCart={this.updateCart} /><Footer/></div>
    	);
  }
  /*render() {
    return (<div className="dev"><ScrollLogic address={this.state.address} searchResultForParent={this.searchResultForParent} addressForParent={this.addressForParent} /></div>)
	}*/
}

export default App;
