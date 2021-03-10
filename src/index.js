import React, { Fragment, Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//Import uuid
import { v4 as uuidv4 } from "uuid"
//Router
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

//Components
import Header from "./Components/Header/header"
import ContactList from "./Components/ContactList/contactList"
import Footer from "./Components/Footer/footer"
import Contact from './Components/Contact/Contact';
import NotFound from './Components/notFound/notfound';
import Edit from './Components/Edit/Edit';


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
    const newList = [...partOne, ...partTwo]
    this.setState(() => {
      return {
        List: newList,
      }
    })
  }
  onEdit = (Id) => {
    const index = this.state.List.findIndex((elem) => elem.Id === Id)
    console.log('index', index)
  }
  onAddContact = (newContact) => {
    const tmpList = this.state.List.slice();
    const newList = [...tmpList, newContact];
    this.setState(() => {
      return {
        List: newList
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
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact render={() => <ContactList onEdit={this.onEdit} List={List} onStatusChange={this.onStatusChange} onDelete={this.onDelete} />} />
            <Route path="/contact" exact render={() => <Contact onAddContact={this.onAddContact} />} />
            <Edit />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </Router>
      </Fragment>

    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"))