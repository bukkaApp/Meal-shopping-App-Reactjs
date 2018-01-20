import React from 'react'
import { Component } from 'react'
import HeaderMax from './HeaderMax'
import HeaderMin from './HeaderMin'
import HeaderStories from './headerStories'
import propTypes from 'prop-types'

export default class scrollLogic extends Component{
	constructor(props) {
		super(props);
		this.state={
			scroll:false,
		};
        this.scrollDetector=this.scrollDetector.bind(this);
	}

	scrollDetector() {
        const scrollmax=(Math.max( 
            document.body.scrollHeight, 
            document.body.offsetHeight, 
            document.documentElement.clientHeight, 
            document.documentElement.scrollHeight, 
            document.documentElement.offsetHeight ))-(Math.min( 
                document.body.scrollHeight, 
                document.body.offsetHeight,
                document.documentElement.clientHeight, 
                document.documentElement.scrollHeight, 
                document.documentElement.offsetHeight ));
        (window.innerWidth>767)?
        (!this.props.Located)?
        ((window.scrollY/scrollmax)*100>18.943403826787512)? 
        this.setState({ scroll:true }):
        this.setState({ scroll:false }):
        (window.scrollY>410)? 
        this.setState({ scroll:true }):
        this.setState({ scroll:false }):
        (!this.props.Located)?
        ((window.scrollY/scrollmax)*100>6.343403826787512)? 
        this.setState({ scroll:true }):
        this.setState({ scroll:false }):
        (window.scrollY>410)? 
        this.setState({ scroll:true }):
        this.setState({ scroll:false })
    }
    componentDidMount() {
        window.addEventListener('scroll', this.scrollDetector);
    }
    componentWillUnmount(){
        window.removeEventListener('scroll', this.scrollDetector);
    }


render() {
        return (
        	(!this.props.chef_fetched)?
            (this.state.scroll)?  
                <HeaderMin />:
                <HeaderMax />:
            (this.state.scroll)?  
            (window.innerWidth>767)?
                <HeaderStories />:
                <HeaderMin  />:              
                <HeaderMin  />
)
}
}


scrollLogic.propTypes={
    chef_fetched:propTypes.bool.isRequired,
    Located:propTypes.bool.isRequired
}