const NUMBER_OF_BUTTONS = 144

export const getInitialState = () =>
  [...new Array(NUMBER_OF_BUTTONS)].reduce(
    (acc, _, idx) => {
      const label = idx + 1
      acc.buttons[label] = { label, highlighted: false }
      return acc
    },
    { buttons: {} }
  )
