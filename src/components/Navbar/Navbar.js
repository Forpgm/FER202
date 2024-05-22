import React, { Component } from "react";
import "./Navbar.css";
export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav>
          <ul className="nav">
            <li className="nav-item">
              <a href="#home">HOME</a>
            </li>
            <li className="nav-item">
              <a href="#news">NEWS</a>
            </li>
            <li className="nav-item">
              <a href="#contact">CONTENT</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navbar;
