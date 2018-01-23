import React, { Component } from 'react'
import '../style/cuisine.css'
import '../style/App.css'
import {connect} from 'react-redux'
import ajx,{mapStateToProps} from '../util/ajax'
import lib from '../util/lib'
import { CSSTransitionGroup } from 'react-transition-group'

class Stores extends Component {
 
    render () {
        return (
                <div className="zn">
                <h1>{this.props.address.Location}</h1>
                <CSSTransitionGroup
							transitionName="cuisine"
							transitionAppear={true}
							transitionAppearTimeout={1000}
							transitionEnter={false}
							transitionLeave={false}>
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
                                <div    className="col-sm-4 m" >
                                    <div   className="lt xyxaa"></div>
                                    <h5 className="avci xyxaa"></h5>
                                    <p className="avcib xyxaa"></p>
                                </div>):
                                null
                    }
                </div>
                </CSSTransitionGroup>
                </div>
        );
        
                
     }
}

export default connect(mapStateToProps)(Stores);