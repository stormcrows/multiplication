const MAX_NUMBER = 144

export const getInitialState = () =>
  [...new Array(MAX_NUMBER)].map((_, idx) => ({
    label: idx + 1,
    highlighted: false,
  }))

const rootReducer = (state = getInitialState(), { type } = {}) => {
  switch (type) {
    default:
      return state
  }
}

export default rootReducer
