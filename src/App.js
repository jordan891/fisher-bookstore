import React, { Component } from "react" ;
import "./App.css";
import {Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
import Routes from "./Routes";

export default class App extends Component {
  render() {
    return (
      <div className = "App container">
        <Navbar bg = "dark" expand = "jg">
          <Navbar.Brand>
            <Link to = "/">Fisher Bookstore</Link>
          </Navbar.Brand>
        </Navbar>
        <Routes />
      </div>
      
    )
  }
}