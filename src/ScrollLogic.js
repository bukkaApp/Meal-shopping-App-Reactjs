import React from 'react';
import { Component } from 'react';
import ReactDOM from 'react-dom';
import './scrollLogic.css';
import HeaderMax from './HeaderMax';
import HeaderMin from './HeaderMin';
import PropTypes from 'prop-types';
import HeaderStories from './headerStories';
import ShoppingCart from './shoppingCart';

export default class scrollLogic extends Component{
	constructor(props) {
		super(props);
		this.state={
			scroll:false,
			address:this.props.address,
			searchResult:''
		};
		this.scrollDetector=this.scrollDetector.bind(this)
	}

	scrollDetector() {
		const scrollmax=(Math.max( document.body.scrollHeight, document.body.offsetHeight, 
                   document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight ))-(Math.min( document.body.scrollHeight, document.body.offsetHeight, 
                   document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight ));
        ((window.scrollY/scrollmax)*100>3.508283447027704)? this.setState({ scroll:true }):this.setState({ scroll:false })
                console.log((window.scrollY/scrollmax)*100);
    }
    componentDidMount() {
        window.addEventListener('scroll', this.scrollDetector);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.scrollDetector);
    }
    searchResultForParent=(result)=>{
    	this.props.searchResultForParent(result);
		this.setState({searchResult:result});
	}
	addressForParent=(adr)=>{
		this.props.addressForParent(adr);
	}


render() {
        return (
        	(this.state.address=='')?
            ((this.state.scroll)? <HeaderMin searchResultForParent={this.searchResultForParent} addressForParent={this.addressForParent} address={this.props.address}/>:<HeaderMax searchResultForParent={this.searchResultForParent} addressForParent={this.addressForParent} address={this.props.address} />):
            (this.state.scroll)? <HeaderStories searchResultForParent={this.searchResultForParent} addressForParent={this.addressForParent} address={this.props.address} chef={this.props.chef} cart={this.props.cart} quantityUpdate={this.props.quantityUpdate} deleteCart={this.props.deleteCart} checkOut={this.props.checkOut} />:<HeaderMin searchResultForParent={this.searchResultForParent} addressForParent={this.addressForParent} address={this.props.address}/>
)
}
}
