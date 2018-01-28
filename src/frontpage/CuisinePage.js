import React,{Component} from 'react'
import HeaderMin from './HeaderMin'
import Cuisine from './cuisine'
import Footer from './Footer'
import OptionLeaf from './OptionLeaf'
import '../style/App.css'
import {connect} from 'react-redux'
import {mapStateToProps} from '../util/ajax'

class CuisinePage extends Component{ 

render(){
return (
    <div className="devi aah">
				<HeaderMin/>
				<Cuisine/>
				<Footer/>
				<OptionLeaf/>
	</div>
)
}
}

export default connect(mapStateToProps)(CuisinePage)