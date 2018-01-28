import React,{Component} from 'react'
import SearchBox from '../frontpage/autoComplete'
import {Link,Redirect} from 'react-router-dom'
import Faarrow from 'react-icons/lib/md/arrow-back'
import '../style/App.css'
import {mapStateToProps} from '../util/ajax'
import {connect} from 'react-redux'
import ErrorChef from './Error'

class MobileSearch extends Component{

    render(){
        const pp=this.props.page.prevpath||"/"
    return (
        (window.innerWidth>767)?
        <Redirect to={pp} />:
        (this.props.chef.error)?
        <ErrorChef/>:
        (this.props.chef.fetching_chefAndCuisine)?
        <Redirect to="/Cuisine" />:
        <div className="pipip">
            <Link to={pp}>
                <Faarrow className="pickle"/>
            </Link>
            <SearchBox mobileroute="picklu"/>
        </div>
    )
}
}
export default connect(mapStateToProps)(MobileSearch)