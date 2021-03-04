import React, { Fragment } from "react"
//Search
import Search from "../Search/search"

import "./header.css"
const Header = () => {
    return (
        <Fragment>
                   <div className="header">
            <h3 className="text">
                <span className="fa fa-users fa-2x principal-title"></span>
                <span>Contact List</span>
                <button class="btn-block-header btn-primary-header"><a href="./newContact" style={{ color: "white" }}>Add New Contact</a></button>
            </h3>
            </div> 
            <Search />
        </Fragment>


    )
}
export default Header;