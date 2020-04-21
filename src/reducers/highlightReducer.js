import { BUTTON_CLICKED } from "../actions"
import { getInitialState } from "../getInitialState"

const isMultiple = (x, n) => x % n === 0

const highlightReducer = (state, { type, payload }) => {
  switch (type) {
    case BUTTON_CLICKED:
      if (state.buttons[payload].selected) {
        return getInitialState()
      }

      return Object.values(state.buttons).reduce(
        (acc, { label }) => {
          acc.buttons[label] = {
            label,
            highlighted: isMultiple(payload, label),
            selected: label === payload,
          }
          return acc
        },
        { buttons: {} }
      )

    default:
      return state
  }
}

export default highlightReducer
