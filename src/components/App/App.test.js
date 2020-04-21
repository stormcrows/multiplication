import React from "react"
import ReactDOM from "react-dom"
import { mount } from "enzyme"
import App from "./App"

it("renders App without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(<App />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it("should display 144 NumberBoxes", () => {
  const calculator = mount(<App />)

  const boxes = calculator.find(`.NumberBox`)

  expect(boxes.length).toBe(144)
})

function code(c) {
  return c.charCodeAt(0)
}
