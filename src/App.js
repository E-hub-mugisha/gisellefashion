import React, { Component } from "react"
import logo from "./logo.svg"
import "./App.css"
import Header from './lambda/Header';
import Footer from "./lambda/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Footer />
      </div>
    )
  }
}

export default App
