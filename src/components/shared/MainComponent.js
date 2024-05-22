import React, { Component } from "react";
import { users } from "./ListOfPlayers";
import PreComponent from "./PreComponent";

export class MainComponent extends Component {
  constructor() {
    super();
    this.state = {
      playerData: users,
    };
  }
  render() {
    return <PreComponent PlayerDataFromMain={this.state.playerData} />;
  }
}
export default MainComponent;
