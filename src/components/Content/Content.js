import React, { Component } from "react";
import "./Content.css";
import ListOfPlayers from "../shared/ListOfPlayers";
export class Content extends Component {
  render() {
    return (
      <>
        <ListOfPlayers />
      </>
    );
  }
}

export default Content;
