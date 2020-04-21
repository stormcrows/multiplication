import React from "react"
import PropTypes from "prop-types"
import { useAppContext } from "../../AppContext"
import { buttonClicked } from "../../actions"
import "./NumberBox.css"

const NumberBox = ({ label, highlighted, selected }) => {
  const dispatch = useAppContext()
  let style = ""

  if (highlighted) {
    style += "highlighted"
  }

  if (selected) {
    style += " selected"
  }

  return (
    <button
      aria-label={`${label} ${style}`}
      className={`NumberBox ${style}`}
      onClick={() => dispatch(buttonClicked(label))}
    >
      {label}
    </button>
  )
}

NumberBox.propTypes = {
  label: PropTypes.number.isRequired,
  highlighted: PropTypes.bool,
  selected: PropTypes.bool,
}

export default NumberBox
