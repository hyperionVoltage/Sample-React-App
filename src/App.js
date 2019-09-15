import React, { Component } from "react";
import Mainview from "./components/Mainview";
import "./styles/mainview.css";

export class App extends Component {
  render() {
    return (
      <div className="backgroundScreen">
        <div className="app">
          <Mainview />
        </div>
      </div>
    );
  }
}

export default App;
