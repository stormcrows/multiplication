import highlightReducer from "./highlightReducer"
import { getInitialState } from "../getInitialState"
import { BUTTON_CLICKED } from "../actions"

it("should set highlighted=true on 1,11 and selected=true on 11 when 11 is clicked", () => {
  const state = getInitialState()
  const newState = highlightReducer(state, {
    type: BUTTON_CLICKED,
    payload: 11,
  })

  const expectedState = getInitialState()
  expectedState.buttons["1"] = { label: 1, highlighted: true, selected: false }
  expectedState.buttons["11"] = { label: 11, highlighted: true, selected: true }

  expect(newState).toMatchObject(expectedState)
})

it("should set highlighted=true on 1,2,3,4,6,12 and selected=true on 12 when 12 is clicked", () => {
  const state = getInitialState()
  const newState = highlightReducer(state, {
    type: BUTTON_CLICKED,
    payload: 12,
  })

  const expectedState = getInitialState()
  expectedState.buttons["1"] = { label: 1, highlighted: true, selected: false }
  expectedState.buttons["2"] = { label: 2, highlighted: true, selected: false }
  expectedState.buttons["3"] = { label: 3, highlighted: true, selected: false }
  expectedState.buttons["4"] = { label: 4, highlighted: true, selected: false }
  expectedState.buttons["6"] = { label: 6, highlighted: true, selected: false }
  expectedState.buttons["12"] = { label: 12, highlighted: true, selected: true }

  expect(newState).toMatchObject(expectedState)
})

it("should set highlighted=false and selected=false on 1,11 when 11 is clicked second time", () => {
  const state = getInitialState()

  let newState = highlightReducer(state, {
    type: BUTTON_CLICKED,
    payload: 11,
  })

  newState = highlightReducer(newState, {
    type: BUTTON_CLICKED,
    payload: 11,
  })

  const expectedState = getInitialState()

  expect(newState).toMatchObject(expectedState)
})

it("should pass-through if action other than BUTTON_CLICKED", () => {
  const initialState = getInitialState()
  const newState = highlightReducer(initialState, {
    type: "unsupported-type",
    payload: 123,
  })

  expect(newState).toMatchObject(initialState)
})
