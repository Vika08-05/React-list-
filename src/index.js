import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//Import uuid
import { v4 as uuidv4 } from "uuid"

//Redux store
import store from "./store";
import { Provider } from "react-redux";

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

  componentDidMount() {
    this.updateDatabase();
  }


  saveData = (contactList) => {
    fetch(this.URL, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(contactList),
    }).then(responce => {
      console.log("saveDate responce => ", responce)
    }).catch(err => console.log(err));
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
    this.saveData(newList)
  }
  //////
  onEdit = (Id) => {
    const index = this.state.List.findIndex((elem) => elem.Id === Id);
    const selectedContact = this.state.List[index];
    this.setState({
      currentContact: selectedContact
    })
  }

  onEditCurrentContact = (newContact) => {
    const { Id } = newContact;
    const index = this.state.List.findIndex((elem) => elem.Id === Id);
    const partOne = this.state.List.slice(0, index);
    const partTwo = this.state.List.slice(index + 1);
    const newList = [...partOne, newContact, ...partTwo];

    this.setState(() => {
      return {
        List: newList,
      };
    })
    this.saveData(newList)
  }
  /////
  onAddContact = (newContact) => {
    const tmpList = this.state.List.slice();
    const newList = [...tmpList, newContact];
    this.setState(() => {
      return {
        List: newList
      }
    })
    this.saveData(newList)
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
    const { List, currentContact } = this.state;
    return (
      <Provider store={store}>
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact render={() => <ContactList onSearch={this.onSearch} onEdit={this.onEdit} filteredList={this.filteredList} List={List} onStatusChange={this.onStatusChange} onDelete={this.onDelete} />} />
            <Route path="/contact" exact render={() => <Contact onAddContact={this.onAddContact} />} />
            <Route path="/edit" exact render={() => <Edit currentContact={currentContact} onEditCurrentContact={this.onEditCurrentContact} />} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </Router>
      </Provider>

    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"))