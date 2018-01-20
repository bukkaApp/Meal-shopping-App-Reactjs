import React from 'react'
import lib from '../util/lib' 
import '../style/signIn.css'
import {connect} from 'react-redux'
import {mapStateToProps} from '../util/ajax'

const ForgotPassword=(props)=>{

var sendResetLink=()=>{
    var _et=document.getElementById('emailt').value
    lib.forgotPassword(_et)
}

    return(
        <div id="bigmenu">
            <div id="addmenu" className="vbo">
                <div className="formField ipp">
                    <div id="topPart">
						<a onClick={()=>lib.toggleshowforgotpassword()}>X</a>
					</div>
                    <label className="la">
                        Email
                    </label>
                    <input placeholder="yourname@email.com" id="emailt"/>
                    <button className="btn-red"
                            onClick={()=>sendResetLink()} >
                        Send reset link
                    </button>
                    {(props.user.forgot_password.error)?
                        (!props.user.forgot_password.error)?
                            <span className="ee vja">
                                {props.user.forgot_password.error.response}! Please try again
                            </span>:
                            <span className="ee vja">
                                {props.user.forgot_password.error.message}! Please try again
                            </span>:
                            null
                    }
                </div>
            </div>
         </div>
)
}

export default connect (mapStateToProps) (ForgotPassword)