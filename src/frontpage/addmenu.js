import React, { Component } from 'react'
import '../style/addmenu.css'
import '../style/App.css'
import MdRemove from 'react-icons/lib/md/remove'
import Mdadd from 'react-icons/lib/md/add'
import {connect} from 'react-redux'
import lib from '../util/lib' 
import {mapStateToProps} from '../util/ajax'

class addmenu extends Component{
    constructor(props) {
		super(props);
		this.state={
            carti:this.props.cart.cart,
            cart:{},
            total:0,
            unitcost:parseInt(this.props.menuinview.menuinview.price,10),
            defaultQuantity:1,
            itemTotal:parseInt(this.props.menuinview.menuinview.price,10),
            chefinstruction:''
		}
        this.addToCart=this.addToCart.bind(this);
        this.increaseNumberOfItem=this.increaseNumberOfItem.bind(this);
        this.reduceNumberOfItem=this.reduceNumberOfItem.bind(this);
        this.addchefinstructions=this.addchefinstructions.bind(this)
    }
    //add chef instruction
        async addchefinstructions(e){
            e.stopPropagation()
            e.preventDefault()
           await this.setState({chefinstruction:e.currentTarget.value})
           
        }
    //increase number of items
		async increaseNumberOfItem(e){
            e.stopPropagation()
            e.preventDefault()
            await this.setState({defaultQuantity:this.state.defaultQuantity+1});
            await this.setState({itemTotal:this.state.defaultQuantity*this.state.unitcost});
	
		}
		//reduce number of items
		async reduceNumberOfItem(){
            (this.state.defaultQuantity>1)? 
             await this.setState({defaultQuantity:this.state.defaultQuantity-1}):
                null
            await this.setState({itemTotal:this.state.defaultQuantity*this.state.unitcost});
		}
		//additem to cart
		async addToCart(e){
            e.stopPropagation()
            e.preventDefault()
            if(Object.keys(this.props.cart.cart).length){
                var _=Object.keys(this.props.cart.cart)[0]
                if(this.props.chef.yourChef.uid!==this.props.cart.cart[`${_}`].chef){
                     lib.addmenu()
                     lib.toggleShowdifcheferror()
                    return{}
                }
            }
            var name=this.props.menuinview.menuinview.menu,
                desc=this.props.menuinview.menuinview.desc,
			    price=this.state.unitcost,
			    quantity=this.state.defaultQuantity,
                totalCost=this.state.itemTotal,
                hour=this.props.menuinview.menuinview.hour,
                min=this.props.menuinview.menuinview.min,
                chef=this.props.chef.yourChef.uid,
                chefinstruction=this.state.chefinstruction
				if(this.state.carti.hasOwnProperty(name)){
					var newQuantity=this.state.carti[name].quantity+quantity,
					    newTotalcost=price*newQuantity,
					    cartUpdate={}
					cartUpdate[name]={
						'price':price,
						'quantity':newQuantity,
                        'totalCost':newTotalcost,
                        'chefinstruction':chefinstruction,
                        'desc':desc,
                        'hour':hour,
                        'min':min,
                        'chef':chef
                    }
					await this.setState({cart:{
                                ...this.state.carti,
                                ...cartUpdate
                            }
                        })
					let total=Object.keys(this.state.cart).map(
                        (key,i)=>this.state.cart[key].totalCost).reduce(
                            (sum,value)=>sum+value,0.00).toFixed(2);
					await this.setState({total:total});
                    lib.updateCart({cart:this.state.cart,total:this.state.total});
				}
	
				if(!this.state.carti.hasOwnProperty(name)){
					var newCart={}
					newCart[name]={
						'price':price,
						'quantity':quantity,
                        'totalCost':totalCost,
                        'chefinstruction':chefinstruction,
                        'desc':desc,
                        'hour':hour,
                        'min':min,
                        'chef':chef
						}
                        await this.setState({cart:{
                            ...this.state.carti,
                            ...newCart
                        }
                    })
                    let total= await Object.keys(this.state.cart).map(
                        (key,i)=>this.state.cart[key].totalCost).reduce(
                            (sum,value)=>sum+value,0).toFixed(2);
					await this.setState({total:total});
                    lib.updateCart({cart:this.state.cart,total:this.state.total});
                }
                lib.addmenu()
        }
        componentWillReceiveProps(nextProps){
            if(this.props!==nextProps){
                this.props=nextProps
            }
        }
    render(){
   const mystyle={
        backgroundImage:`url(${this.props.menuinview.menuinview.image})`
    }
    return(
        <div id="bigmenu">
        <div id="addmenu"> 
            <div id="addmenu-holder">
                <div className="foodie" style={mystyle}>
                </div>
                <a className="cancle-x" onClick={()=>lib.addmenu()}>&times;</a>
                <div id="title">
                    <h1>
                        {this.props.menuinview.menuinview.menu}
                    </h1>
                    <h5>
                        {this.props.menuinview.menuinview.desc}
                    </h5>
                </div>
                <div id="instructions">
                    <h4>Special Instructions</h4>
                    <input  className="form-control" 
                            id="Note-for-chef" 
                            onChange={this.addchefinstructions} 
                            placeholder="Add note(extra sauce,no onions etc)"/>
                </div>
                <div id="placeorder">
                    <div className="placeorder-holder">
                        <h3     className="add" 
                                onClick={this.reduceNumberOfItem} >
                            <MdRemove />
                        </h3>
                        <h4 className="item-quantity">
                            {this.state.defaultQuantity}
                        </h4>
                        <h3     className="minus"  
                                onClick={this.increaseNumberOfItem} >
                        <Mdadd />
                        </h3>
                    </div>
                    <button className="btn-large" onClick={this.addToCart}>
                        <div>
                        <h5 className="first">₦{this.state.itemTotal}.00</h5>
                        <h4 className="second">Add {this.state.defaultQuantity} to cart</h4>
                        <h5 className="third">₦{this.state.itemTotal}.00</h5>
                        </div>
                    </button>
                </div>
            </div>
        </div>
        </div>
    )
}
}

export default connect(mapStateToProps)(addmenu)