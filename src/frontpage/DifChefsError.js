import React from 'react'
import '../style/addmenu.css'
import '../style/App.css'
import lib from '../util/lib' 

const DifChefsError=()=>(
    <div id="bigmenu">
        <div id="addmenu" className="vbo"> 
            <div id="err">
                <h4>Sorry! You can only shop from one chef at a time.You may {" "}
                    <a  className="clear_c" 
                        onClick={()=>lib.clear_Cart()}>
                         clear Cart
                    </a> 
                    {" "}
                        to proceed with a new chef or
                    {" "}
                    <a className="clear_c" onClick={()=>lib.toggleShowdifcheferror()}>
                        Continue Shopping
                    </a>
                </h4>
                    
            </div>
        </div>
    </div>
)
export default DifChefsError