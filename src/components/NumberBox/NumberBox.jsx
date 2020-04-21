import React from "react"
import PropTypes from "prop-types"
import { useAppContext } from "../../AppContext"
import { buttonClicked } from "../../actions"
import "./NumberBox.css"

const NumberBox = ({ label, highlighted }) => {
  const dispatch = useAppContext()
  const style = highlighted ? "highlighted" : ""

  return (
    <button
      className={`NumberBox ${style}`}
      onClick={() => dispatch(buttonClicked(Number(label)))}
    >
      {label}
    </button>
  )
}

NumberBox.propTypes = {
  label: PropTypes.number.isRequired,
  highlighted: PropTypes.bool,
}

export default NumberBox
