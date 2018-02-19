import React, { Component } from 'react'
import lib from '../util/lib' 
import '../style/signIn.css'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {mapStateToProps} from '../util/ajax'

class ChangePassword extends Component{
constructor(props){
    super(props)
    this.state={
        error:null,
        passwordChanged:false,
        res:null
    }
    this.changePassword=this.changePassword.bind(this)
}

changePassword(e){
    e.preventDefault()
    e.stopPropagation()
    e.persist()
    let pa=document.getElementById('pa').value,
        pb=document.getElementById('pb').value,
        _=this
    
    if(pa===""||pb===""){
        _.setState((prevState,props)=>({
            error:{error:{message:"Password field cannot be empty!"}}
        }))
        console.log(this.state)
    }else if(pa!==pb){
        _.setState((prevState,props)=>({
            error:{error:{message:"Passwords do not match!"}}
        }))
        console.log(this.state)
    }else{
        const { match:{params} }=this.props,
        code=params.key,
        password=pa

        lib.changePassword(pa,code)
        .then((res)=>this.setState(()=>({
            passwordChanged:true,
            error:null,
            res
            })))
        .catch((e)=>(
            this.setState(()=>
            ({error:e})))
        )     
    }
   
}

render(){
    return(
        <div id="bigmenu">
            <div id="addmenu" className="vbo">
                <form className="formField ipp" autoComplete="on">
                    <input placeholder="Enter New Password" id="pa" type="password" name="password" autoComplete="on"/>
                    <input placeholder="Confirm New Password" id="pb" type="password" name="password" autoComplete="on"/>
                    {   (!this.state.passwordChanged)?
                        <button className="btn-red"
                                onClick={this.changePassword} >
                            Reset Password
                        </button>:
                        <Link to="/">
                            <button className="btn-red">
                                Continue Shopping 
                            </button>
                        </Link>
                    }
                    {(this.state.error)?
                            (this.state.error.response)?
                            <span className="ee vja">
                                {this.state.error.error.msg}
                            </span>:
                            <span className="ee vja">
                                {this.state.error.error.message}
                            </span>:
                            null
                    }
                    {   (this.state.passwordChanged)?
                        <span className="ee vja">
                        {this.state.res.msg}
                        </span>:
                        null
                    }
                </form>
            </div>
         </div>
)
}
}

export default connect (mapStateToProps) (ChangePassword)