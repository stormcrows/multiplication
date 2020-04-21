import React from "react"
import { shallow } from "enzyme"
import * as AppContext from "../../AppContext"
import { BUTTON_CLICKED } from "../../actions"
import NumberBox from "./NumberBox"

it("Renders a button with provided type", () => {
  const dispatch = jest.fn()
  jest.spyOn(AppContext, "useAppContext").mockImplementation(() => dispatch)

  const key = shallow(<NumberBox label={144} />)
  const btn = key.find("button")

  expect(btn.text()).toBe("144")
})

it("Dispatches a * type action upon clicking a Key", () => {
  const dispatch = jest.fn()
  jest.spyOn(AppContext, "useAppContext").mockImplementation(() => dispatch)

  const key = shallow(<NumberBox label={144} />)
  const btn = key.find("button")
  btn.simulate("click")

  expect(dispatch).toHaveBeenCalledWith({ type: BUTTON_CLICKED, payload: 144 })
})
