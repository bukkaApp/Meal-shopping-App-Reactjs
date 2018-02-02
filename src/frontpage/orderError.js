import React from 'react'
import '../style/addmenu.css'
import '../style/App.css'
import lib from '../util/lib' 

const orderError=(props)=>(
    <div id="bigmenu">
        <div id="addmenu" className="vbo"> 
            <div id="err">
                <h4 className="qa">
                    {props.error+"  Please try again"}
                    <a className="qw"
                        onClick={()=>lib.toggleshoworder_error()}>x</a>
                </h4>
            </div>
        </div>
    </div>
)

export default orderError