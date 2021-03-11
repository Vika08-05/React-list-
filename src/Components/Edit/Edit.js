import React, { Fragment } from "react";
import { v4 as uuidv4 } from "uuid"
import { Redirect } from "react-router-dom";


class Edit extends React.Component {
/////////
  state = {
    "Id": this.props.currentContact.Id,
    "Avatar": this.props.currentContact.Avatar,
    "Name": this.props.currentContact.Name,
    "Created": this.props.currentContact.Created,
    "Role": this.props.currentContact.Role,
    "Status": this.props.currentContact.Status,
    "Email": this.props.currentContact.Email,
    "Gender": "women",
    "isRedirect": false
  }
////////

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
  /////////
  editNewContact = (event) => {
    event.preventDefault();
    const {Id, Avatar, Name, Email, Role, Status,Created, Gender } = this.state;
    const newContact = { Id, Avatar, Name, Created, Role, Status, Gender, Email };
    const { onEditCurrentContact } = this.props;
    onEditCurrentContact(newContact);
    this.setState({
      isRedirect: true
    })
  }
  // //////
  render() {
    console.log(this.props)
    const { Avatar, Name, Email, Role, Status, Gender,isRedirect } = this.state;
    if (isRedirect) {
      return (
        <Redirect to="/" />
      )
    }
    const URL = `https://randomuser.me/api/portraits/${Gender}/${Avatar}.jpg`
    // console.log("State", this.state)
    return (
      <Fragment>
        <div className="col-lg-4 person">
          <h1 style={{ textAlign: "center" }}>EDIT</h1>
          <div className="panel-body text-center">
            <div className="pv-lg">
              <img className="center-block img-responsive img-circle img-thumbnail thumb96"
              src={URL} alt="Contact" />
            </div>
            <div className="mv-lg">
              <p className="para">Hello, I'm a just a dummy contact in your contact list and this is my
 presentation text. Have fun!</p>
            </div>
          </div>
        </div>
        <div className="container-form" col-lg-4>

          <form className="form" onSubmit={this.editNewContact} >
            <label>Enter your Name:</label>
            <input onChange={this.getName} type="text" placeholder={Name} />
            <br></br>
            <label>Enter your Role:</label>
            <input onChange={this.getRole} type="text" placeholder={Role} />
            <br></br>
            <label>Enter your Status:</label>
            <input onChange={this.getStatus} type="text" placeholder={Status} />
            <br></br>
            <label>Enter your Email:</label>
            <input onChange={this.getEmail} type="text" placeholder={Email} />
            <br></br>
            <label>Enter your avatar:</label>
            <input type="number" min="1" max="99" name="avatar" onChange={this.getAvatar} placeholder={Avatar} />
            <br></br>
            <button className="btn-block btn-primary sub" style={{ color: "white" }}> Edit  </button>
          </form>
        </div>
      </Fragment>
    )
  }
}
export default Edit;