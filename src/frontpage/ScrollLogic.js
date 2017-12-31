import React from 'react';
import { Component } from 'react';
import HeaderMax from './HeaderMax';
import HeaderMin from './HeaderMin';
import HeaderStories from './headerStories';

export default class scrollLogic extends Component{
	constructor(props) {
		super(props);
		this.state={
			scroll:false,
			address:this.props.address,
			searchResult:''
		};
        this.scrollDetector=this.scrollDetector.bind(this);
	}

	scrollDetector() {
		const scrollmax=(Math.max( document.body.scrollHeight, document.body.offsetHeight, 
                   document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight ))-(Math.min( document.body.scrollHeight, document.body.offsetHeight, 
                   document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight ));
                   (window.innerWidth>767)?
                   (!this.props.Located)?
        ((window.scrollY/scrollmax)*100>18.943403826787512)? this.setState({ scroll:true }):this.setState({ scroll:false }):
        (window.scrollY>362)? this.setState({ scroll:true }):this.setState({ scroll:false }):
        (!this.props.Located)?
        ((window.scrollY/scrollmax)*100>6.343403826787512)? this.setState({ scroll:true }):this.setState({ scroll:false }):
        (window.scrollY>362)? this.setState({ scroll:true }):this.setState({ scroll:false })

    }
    componentDidMount() {
        window.addEventListener('scroll', this.scrollDetector);
    }
    componentWillUnmount(){
        window.removeEventListener('scroll', this.scrollDetector);
    }


render() {
        return (
        	(!this.props.Located)?
            ((this.state.scroll)?   <HeaderMin  toggleSignin={this.props.toggleSignin} 
                                                toggleSignUp={this.props.toggleSignUp}
                                                deleteCart={this.props.deleteCart} 
                                                quantityUpdate={this.props.quantityUpdate}
                                                user={this.props.user}
                                                signout={this.props.signout}
                                                cart={this.props.cart}
                                                Located={this.props.Located}
                                                chefResult={this.props.chefResult} />:
                                    <HeaderMax  toggleSignin={this.props.toggleSignin} 
                                                toggleSignUp={this.props.toggleSignUp}
                                                deleteCart={this.props.deleteCart} 
                                                quantityUpdate={this.props.quantityUpdate}
                                                user={this.props.user}
                                                signout={this.props.signout}
                                                cart={this.props.cart} 
                                                Located={this.props.Located}
                                                chefResult={this.props.chefResult} />):
            (this.state.scroll)?  
            (window.innerWidth>767)?
                                    <HeaderStories  toggleSignin={this.props.toggleSignin} 
                                                    toggleSignUp={this.props.toggleSignUp} 
                                                    chef={this.props.chef} 
                                                    cart={this.props.cart} 
                                                    quantityUpdate={this.props.quantityUpdate} 
                                                    deleteCart={this.props.deleteCart} 
                                                    user={this.props.user}
                                                    signout={this.props.signout} 
                                                    Located={this.props.Located}
                                                    chefResult={this.props.chefResult} />:
                                    <HeaderMin  toggleSignin={this.props.toggleSignin} 
                                                    toggleSignUp={this.props.toggleSignUp}
                                                    user={this.props.user}
                                                    signout={this.props.signout}
                                                    deleteCart={this.props.deleteCart} 
                                                    quantityUpdate={this.props.quantityUpdate}
                                                    cart={this.props.cart}
                                                    Located={this.props.Located}
                                                    chefResult={this.props.chefResult} />:              
                                    <HeaderMin  toggleSignin={this.props.toggleSignin} 
                                                toggleSignUp={this.props.toggleSignUp}
                                                user={this.props.user}
                                                signout={this.props.signout}
                                                deleteCart={this.props.deleteCart} 
                                                quantityUpdate={this.props.quantityUpdate}
                                                cart={this.props.cart}
                                                Located={this.props.Located}
                                                chefResult={this.props.chefResult} />
)
}
}
