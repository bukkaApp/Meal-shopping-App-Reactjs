import React from 'react'
import SearchBox from './autoComplete'
import FaArrowLeft from 'react-icons/lib/fa/arrow-left'
import { NavLink } from 'react-router-dom'

const MobileSearch=(props)=>(
    <div>
        <div>
            <NavLink to="" activeClassName="selected">
                <FaArrowLeft style={{marginBottom:'10px', marginTop: '10px'}} />
            </NavLink>
        </div>
        <div>   
            <SearchBox/>
        </div>
    </div>
)
export default MobileSearch