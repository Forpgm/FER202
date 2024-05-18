import React, { Component } from "react";
import "./Content.css";
export class Content extends Component {
  render() {
    return (
      <div className="container">
        <div className="row ">
          <div className="col-4 card text-center">
            <img src="images/cr.jpg" alt=""></img>
            <h3>Cr</h3>
            <p>club</p>
          </div>
          <div className="col-4 card text-center">
            <img src="images/haaland.jpg" className="card-img" alt=""></img>
            <h3>Haaland</h3>
            <p>club</p>
          </div>
          <div className="col-4 card text-center">
            <img src="images/m.jpg" className="card-img" alt=""></img>
            <h3>M</h3>
            <p>club</p>
          </div>
          <div className="col-4 card text-center">
            <img src="images/messi.jpg" className="card-img" alt=""></img>
            <h3>Messi</h3>
            <p>club</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
