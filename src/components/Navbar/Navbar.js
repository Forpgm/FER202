import React, { Component } from "react";
import "./Navbar.css";
export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="container">
          <ul className="navbar">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#news">News</a>
            </li>
            <li>
              <a href="#contact">Content</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navbar;
