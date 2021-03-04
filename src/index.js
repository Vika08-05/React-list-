import React, { Fragment, Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { v4 as uuidv4 } from "uuid"

//Components
import Header from "./Components/Header/header"
// import Contact from "./Components/About/Contact"
import Search from "./Components/Search/search"
import ContactList from "./Components/ContactList/contactList"
import Footer from "./Components/Footer/footer"


class App extends Component {

  state = {
    List: [
      {
        "Id": uuidv4(),
        "Avatar": "88",
        "Name": "Mila Kunis",
        "Created": "2013/08/08",
        "Role": "Admin",
        "Status": "Active",
        "Email": "mila@kunis.com",
        "Gender": "women",
      },
      {
        "Id": uuidv4(),
        "Avatar": "68",
        "Name": "Camil Blass",
        "Created": "2013/02/08",
        "Role": "User",
        "Status": "Inactive",
        "Email": "camil@gmail.com",
        "Gender": "men",
      },
      {
        "Id": uuidv4(),
        "Avatar": "33",
        "Name": "Jenifer Jonson",
        "Created": "2013/02/08",
        "Role": "User",
        "Status": "Banned",
        "Email": "jj@gmail.com",
        "Gender": "men",
      },
      {
        "Id": uuidv4(),
        "Avatar": "36",
        "Name": "John Black",
        "Created": "2013/02/08",
        "Role": "User",
        "Status": "Pending",
        "Email": "jj@gmail.com",
        "Gender": "men",
      },
    ]

  }

  onDelete = (Id) => {
    const index = this.state.List.findIndex((elem) => elem.Id === Id)
    const partOne = this.state.List.slice(0, index)
    const partTwo = this.state.List.slice(index + 1)
    const newList = [...partOne,...partTwo]
    this.setState(() => {
      return {
        List: newList,
      }
    })
  }

  onStatusChange = (Id) => {
    const index = this.state.List.findIndex((elem) => elem.Id === Id)
    let newList = this.state.List.slice();

    if (newList[index].Status === "Inactive") {
      newList[index].Status = "Active"
    }
    else if (newList[index].Status === "Active") {
      newList[index].Status = "Pending"
    }
    else if (newList[index].Status === "Pending") {
      newList[index].Status = "Banned"
    }
    else if (newList[index].Status === "Banned") {
      newList[index].Status = "Inactive"
    }
    this.setState(() => {
      return (
        this.setState({
          List: newList
        })
      )
    })
  }

  render() {
    const { List } = this.state;
    return (
      <Fragment>
        {/* <Contact /> */}
        <Header />
        <Search />
        <ContactList List={List} onStatusChange={this.onStatusChange} onDelete={this.onDelete} />
        <Footer />
      </Fragment>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"))