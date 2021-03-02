import React from "react";
import "./about.css"

const Contact = () => {
  return (
    <div className="container">
      <form className="form">
        <label>Enter your Name:</label>
        <input type="text" />
        <br></br>
        <label>Enter your Role:</label>
        <select >
          <option value="Admin">Admin</option>
          <option value="User">User</option>
        </select>
        <br></br>
        <label>Enter your Status:</label>
        <select >
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
        <br></br>
        <label>Enter your Email:</label>
        <input type="text" />
        <br></br>
        <label>Enter date you created:</label>
        <input type="text" />
        <br></br>
        <button className="btn-block btn-primary sub" style={{ color: "white" }}> Submit </button>
      </form>
      <button className="btn-block btn-primary home"><a href="./index.js" style={{ color: "white" }}>Home</a></button>
    </div>

  )
}
export default Contact;