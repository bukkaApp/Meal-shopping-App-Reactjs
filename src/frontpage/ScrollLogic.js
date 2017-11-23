import React from 'react';
import { Component } from 'react';
import ReactDOM from 'react-dom';
import '../style/scrollLogic.css';
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
    componentWillUnmount(){
        window.removeEventListener('scroll', this.scrollDetector);
    }


render() {
        return (
        	(this.state.address=='')?
            ((this.state.scroll)?   <HeaderMin  toggleSignin={this.props.toggleSignin} 
                                                toggleSignUp={this.props.toggleSignUp}
                                                user={this.props.user}
                                                signout={this.props.signout}
                                                cart={this.props.cart} />:
                                    <HeaderMax  toggleSignin={this.props.toggleSignin} 
                                                toggleSignUp={this.props.toggleSignUp}
                                                user={this.props.user}
                                                signout={this.props.signout}
                                                cart={this.props.cart} />):
            (this.state.scroll)?    <headerStories  toggleSignin={this.props.toggleSignin} 
                                                    toggleSignUp={this.props.toggleSignUp} 
                                                    chef={this.props.chef} 
                                                    checkchef={this.props.checkchef} 
                                                    cart={this.props.cart} 
                                                    quantityUpdate={this.props.quantityUpdate} 
                                                    deleteCart={this.props.deleteCart} 
                                                    checkOut={this.props.checkOut}
                                                    user={this.props.user}
                                                    signout={this.props.signout} />:
                                    <HeaderMin  toggleSignin={this.props.toggleSignin} 
                                                toggleSignUp={this.props.toggleSignUp}
                                                user={this.props.user}
                                                signout={this.props.signout}
                                                cart={this.props.cart}/>
)
}
}
