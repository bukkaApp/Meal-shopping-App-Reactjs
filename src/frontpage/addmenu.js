import React, { Component } from 'react';
import '../style/addmenu.css';
import '../style/App.css';
import MdRemove from 'react-icons/lib/md/remove';
import Mdadd from 'react-icons/lib/md/add';

const addmenu=(props)=>{
   const mystyle={
        backgroundImage:`url('https://duyt4h9nfnj50.cloudfront.net/sku/640274c9cc74a3771f04b6f30131eb05')`
    }
    return(
        <div id="addmenu"> 
            <div id="addmenu-holder">
                <div className="foodie" style={mystyle}>
                </div>
                <a className="cancle-x">&times;</a>
                <div id="title">
                    <h1>
                        Double Quarter Pounder®* with Cheese Meal
                    </h1>
                    <h5>
                        Comes with medium beverage and 1 side choice
                    </h5>
                </div>
                <div id="instructions">
                    <h4>Special Instructions</h4>
                    <input className="form-control" placeholder="Add note(extra sauce,no onions etc)"/>
                </div>
                <div id="placeorder">
                    <div class="placeorder-holder">
                    <h3 className="add">
                    <MdRemove />
                    </h3>
                    <h4 className="item-quantity">
                        1
                    </h4>
                    <h3 className="minus">
                    <Mdadd />
                    </h3>
                    </div>
                    <button className="btn-large">
                        <div>
                        <h5 className="first">₦500.00</h5>
                        <h4 className="second">Add 1 to cart</h4>
                        <h5 className="third">₦500.00</h5>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}
export default addmenu;