import React, { Component } from 'react'
import '../style/cuisine.css'
import '../style/App.css'
import {connect} from 'react-redux'
import ajx,{mapStateToProps} from '../util/ajax'
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
                        null
                    }
                    {
                        (this.props.chef.fetching_chefAndCuisine)?
                            [1,2,3].map((cui,key)=>
                                <div    className="col-sm-4 m" key={key} >
                                    <div   className="lt xyxaa"></div>
                                    <h5 className="avci xyxaa"></h5>
                                    <p className="avcib xyxaa"></p>
                                </div>):
                                null
                    }
                </div>
                </div>
        );
        
                
     }
}

export default connect(mapStateToProps)(Stores);