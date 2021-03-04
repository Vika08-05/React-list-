import React, { Fragment } from "react"
import { Link } from "react-router-dom"

//Search
import Search from "../Search/search"

import "./header.css"
const Header = () => {
    return (
        <Fragment>
            <div className="header">
                <h3 className="text">
                    <span className="fa fa-users fa-2x principal-title"></span>
                    <Link to="/"><span className="contactlist">Contact List</span></Link>
                   <Link to="/contact" style={{ marginLeft: 100 }}>Add New Contact</Link>
                </h3>
            </div>
            <Search />
        </Fragment>


    )
}
export default Header;