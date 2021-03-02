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


  render() {
    const { List } = this.state;
    return (
      <Fragment>
        {/* <Contact /> */}
        <Header />
        <Search />
        <ContactList List={List} />
        <Footer />
      </Fragment>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"))