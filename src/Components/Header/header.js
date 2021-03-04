import React from "react"
import "./header.css"
const Header = () => {
    return (
        <div className="header">
            <h3 className="text">
                <span className="fa fa-users fa-2x principal-title"></span>
                <span>Contact List</span>
                <button class="btn-block btn-primary"><a href="./newContact" style={{ color: "white" }}>Add New Contact</a></button>
            </h3>
        </div>
    )
}
export default Header;