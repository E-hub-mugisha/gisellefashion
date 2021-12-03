import React, { Component } from "react"
import logo from "./logo.svg"
import "./App.css"
import Hello from './lambda/Hello';


class App extends Component {
  render() {
    return (
      <div className="App">
        
        <LambdaDemo />
      </div>
    )
  }
}

export default App
