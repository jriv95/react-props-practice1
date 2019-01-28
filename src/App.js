import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header.js";

class App extends Component {
  render() {
    // the fact that this is being returned inside of App that makes it the parent
    return <Header header="Test" />;
  }
}

export default App;
