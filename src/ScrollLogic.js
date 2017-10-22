import React from 'react';
import { Component } from 'react';
import ReactDOM from 'react-dom';
import './scrollLogic.css';
import HeaderMax from './HeaderMax';
import HeaderMin from './HeaderMin';
import PropTypes from 'prop-types';

export default class scrollLogic extends Component{
	constructor(props) {
		super(props);
		this.state={
			scroll:false
		};
		this.scrollDetector=this.scrollDetector.bind(this)
	}

	scrollDetector() {

		const scrollmax=(Math.max( document.body.scrollHeight, document.body.offsetHeight, 
                   document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight ))-(Math.min( document.body.scrollHeight, document.body.offsetHeight, 
                   document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight ));
        ((window.scrollY/scrollmax)*100>10)? this.setState({ scroll:true }):this.setState({ scroll:false })
                console.log((window.scrollY/scrollmax)*100);
    }
    componentDidMount() {
        const list = ReactDOM.findDOMNode(this.refs.list)
        window.addEventListener('scroll', this.scrollDetector);
    }
    componentWillUnmount() {
        const list = ReactDOM.findDOMNode(this.refs.list)
        window.removeEventListener('scroll', this.scrollDetector);
    }
render() {
        return (
            (this.state.scroll)? <HeaderMin/>:<HeaderMax/>
)
}
}