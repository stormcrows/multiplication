import rootReducer, { getInitialState } from "./rootReducer"

it("returns initial state when no params provided", () => {
  expect(rootReducer()).toMatchObject(getInitialState())
})
