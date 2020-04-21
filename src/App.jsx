import React, { Component } from "react"
import { NumberBox } from "./components"

import "./App.css"

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <NumberBox label={144} highlighted={true} />
      </div>
    )
  }
}

export default App
