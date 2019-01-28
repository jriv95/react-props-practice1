import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header"

class App extends Component {
  render() {
    // the fact that this is being returned inside of App, that makes it the parent
    return (
    < Header 
    header="This is the header prop"
    somekey="value"   
    anotherkey="another value"/>
    );
  }
}

export default App;
