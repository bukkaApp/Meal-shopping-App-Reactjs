import React, { Component } from 'react'
import '../style/cuisine.css'
import '../style/App.css'
import {connect} from 'react-redux'
import ajx from '../util/ajax'
import lib from '../util/lib'

class Stores extends Component {
 
    render () {
        return (
                <div className="zn">
                <h1>{this.props.address.Location}</h1>
                <div className="row kt">
                    {(Object.keys(this.props.chef.chefAndCuisine))?
                        Object.keys(this.props.chef.chefAndCuisine).map((cui,key)=>
                        <div    className="col-sm-4 m" 
                                key={key}>
                            <img    className="lt" 
                                    src={ajx[`${cui}`]} 
                                    alt="foodimage"
                                    onClick={()=>lib.updatechefbycuisine(cui)}/>
                            <h5>{cui}</h5>
                            <p>20-60 Mins</p>
                        </div>):
                        <div    className="col-sm-4 m kki">
                            <img    className="lt"  
                                    alt="foodimage" />
                            <h5> </h5>
                            <p>20-60 Mins</p>
                        </div>
                    }
                </div>
                </div>
        );
        
                
     }
}

function mapStateToProps(state){
	return state;
};
export default connect(mapStateToProps)(Stores);