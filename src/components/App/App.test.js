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

it("should highlight 1,2,3,4,6,12 NumberBoxes when 12 is clicked", () => {
  const calculator = mount(<App />)
  const expectedHighlights = [1, 2, 3, 4, 6, 12]

  calculator.find(".NumberBox").at(11).simulate("click")

  expectedHighlights.forEach((num) => {
    const box = calculator.find(".NumberBox").at(num - 1)
    expect(box.hasClass("highlighted")).toBeTruthy()
  })
})

it("should set selected class on NumberBox 12 when 12 is clicked", () => {
  const calculator = mount(<App />)

  calculator.find(".NumberBox").at(11).simulate("click")

  expect(calculator.find(".NumberBox").at(11).hasClass("selected")).toBeTruthy()
})

it("should highlight different set of NumberBoxes when 11 then 12 is clicked", () => {
  const calculator = mount(<App />)
  const expectedHighlights = [1, 2, 3, 4, 6, 12]

  calculator.find(".NumberBox").at(10).simulate("click")
  calculator.find(".NumberBox").at(11).simulate("click")

  expect(calculator.find(".NumberBox").at(10).hasClass("selected")).toBeFalsy()
  expect(calculator.find(".NumberBox").at(11).hasClass("selected")).toBeTruthy()

  expectedHighlights.forEach((num) => {
    const box = calculator.find(".NumberBox").at(num - 1)
    expect(box.hasClass("highlighted")).toBeTruthy()
  })
})
