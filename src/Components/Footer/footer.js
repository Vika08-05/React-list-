import React from "react"
import "./footer.css"
const Footer = () => {
    return (

        <footer className="footer">
            {/* <button class="btn-block btn-primary"><a href="./newContact" style={{ color: "white" }}>Add New Contact</a></button> */}
            <div className="copyright">
                <p>copy 2013 - Organisation</p>
                <div className="social">
                    <a href="#" className="support">Contact Us</a>
                    <a href="#" className="face">f</a>
                    <a href="#" className="tweet">t</a>
                    <a href="#" className="linked">in</a>
                </div>
            </div>
        </footer>

    )
}
export default Footer;