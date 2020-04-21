import React from "react"
import ReactDOM from "react-dom"
import { mount } from "enzyme"
import App from "./App"

it("renders App without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(<App />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it("should display 'Hello World'", () => {
  const calculator = mount(<App />)

  const h1 = calculator.find("h1")
  expect(h1.text()).toBe("Hello World")
})
