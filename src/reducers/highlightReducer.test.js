import highlightReducer from "./highlightReducer"
import { getInitialState } from "../getInitialState"
import { BUTTON_CLICKED } from "../actions"

it("should set highlighted=true on 1,11 when 11 is clicked", () => {
  const state = getInitialState()
  const newState = highlightReducer(state, {
    type: BUTTON_CLICKED,
    payload: 11,
  })

  const expectedState = getInitialState()
  expectedState.buttons["1"] = { label: 1, highlighted: true }
  expectedState.buttons["11"] = { label: 11, highlighted: true }

  expect(newState).toMatchObject(expectedState)
})

it("should set highlighted=true on 1,2,3,4,6,12 when 12 is clicked", () => {
  const state = getInitialState()
  const newState = highlightReducer(state, {
    type: BUTTON_CLICKED,
    payload: 12,
  })

  const expectedState = getInitialState()
  expectedState.buttons["1"] = { label: 1, highlighted: true }
  expectedState.buttons["2"] = { label: 2, highlighted: true }
  expectedState.buttons["3"] = { label: 3, highlighted: true }
  expectedState.buttons["4"] = { label: 4, highlighted: true }
  expectedState.buttons["6"] = { label: 6, highlighted: true }
  expectedState.buttons["12"] = { label: 12, highlighted: true }

  expect(newState).toMatchObject(expectedState)
})
