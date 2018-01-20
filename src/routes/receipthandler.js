import React from 'react'
import { Redirect } from "react-router-dom"
import {connect} from 'react-redux'
import Receipt from './receiptRoute'
import {mapStateToProps} from '../util/ajax'

const ReceiptHandlerRoute=(props)=>(
    (props.receipt.receiptGenerated)?
        <Receipt />:
        <Redirect to="/"/>
)

export default connect(mapStateToProps)(ReceiptHandlerRoute)