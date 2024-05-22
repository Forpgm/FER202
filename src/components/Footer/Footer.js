import React, { Component } from "react";
import "./Footer.css";
export class Footer extends Component {
  render() {
    return (
      <div className="footer text-center">
        <h4 className="fs-6 text">
          copyright <i class="fa-solid fa-copyright"> </i> 2022
        </h4>
      </div>
    );
  }
}

export default Footer;
