import React, { Fragment } from "react";
import "./about.css"
import { v4 as uuidv4 } from "uuid"
import { Redirect } from "react-router-dom";
import { saveData } from "../../Services/api-service"
import { addNewContact } from "../../Actions/ContactListActions"
import { connect } from "react-redux"


class Contact extends React.Component {

  state = {
    "Avatar": 1,
    "Name": " ",
    "Created": "",
    "Role": "",
    "Status": "",
    "Email": "",
    "Gender": "women",
    "isRedirect": false
  }

  /////
  getAvatar = (event) => {
    this.setState({
      Avatar: event.target.value
    })
  }
  getName = (event) => {
    this.setState({
      Name: event.target.value
    })
  }
  getRole = (event) => {
    this.setState({
      Role: event.target.value
    })
  }
  getEmail = (event) => {
    this.setState({
      Email: event.target.value
    })
  }
  getStatus = (event) => {
    this.setState({
      Status: event.target.value
    })
  }

  addNewContact = (event) => {
    event.preventDefault();
    const { Avatar, Name, Email, Role, Status, Gender } = this.state;
    let Created = Date.now();
    const Id = uuidv4();
    const addNewContact = { Id, Avatar, Name, Created, Role, Status, Gender, Email };
    const { List } = this.props;
    const NewList = [...List, addNewContact]
    saveData(NewList);
    this.setState({
      isRedirect: true
    })
  }
  
  render() {
    const { Name, Gender, Avatar, isRedirect } = this.state;
    if (isRedirect) {
      return (
        <Redirect to="/" />
      )
    }
    const URL = `https://randomuser.me/api/portraits/${Gender}/${Avatar}.jpg`
    return (
      <Fragment>
        <div className="col-lg-4 person">
          <div className="panel-body text-center">
            <div className="pv-lg"><img
              className="center-block img-responsive img-circle img-thumbnail thumb96"
              src={URL} alt="Contact" />
            </div>
            {Name.length > 0 ? Name : <h2>Andrey</h2>}
            <div className="mv-lg">
              <p className="para">Hello, I'm a just a dummy contact in your contact list and this is my
 presentation text. Have fun!</p>
            </div>
          </div>
        </div>
        <div className="container-form" col-lg-4>
          <form className="form" onSubmit={this.addNewContact} >
            <label>Enter your Name:</label>
            <input onChange={this.getName} type="text" placeholder="Name" />
            <br></br>
            <label>Enter your Role:</label>
            <input onChange={this.getRole} type="text" placeholder="Role" />
            <br></br>
            <label>Enter your Status:</label>
            <input onChange={this.getStatus} type="text" placeholder="Status" />
            <br></br>
            <label>Enter your Email:</label>
            <input onChange={this.getEmail} type="text" placeholder="Email" />
            <br></br>
            <label>Enter your avatar:</label>
            <input type="number" min="1" max="99" name="avatar" onChange={this.getAvatar} placeholder="Avatar" />
            <br></br>
            <button className="btn-block btn-primary sub" style={{ color: "white" }}> Submit </button>
          </form>
        </div>
      </Fragment>
    )
  }
}


const mapStateToProps = ({ ContactListReducer }) => {
  const { List } = ContactListReducer
  return { List }
}
const mapDispatchToProps = {
  addNewContact,
}
export default connect(mapStateToProps, mapDispatchToProps)(Contact);