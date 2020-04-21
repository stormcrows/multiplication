import React, { useReducer } from "react"
import AppContext from "../../AppContext"
import { getInitialState } from "../../getInitialState"
import { highlightReducer } from "../../reducers"
import NumberBox from "../NumberBox/NumberBox"
import "./App.css"

const App = () => {
  const [state, dispatch] = useReducer(highlightReducer, getInitialState())

  return (
    <AppContext.Provider value={dispatch}>
      <div className="App">
        {Object.values(state.buttons).map(({ label, highlighted }) => {
          return (
            <NumberBox key={label} label={label} highlighted={highlighted} />
          )
        })}
      </div>
    </AppContext.Provider>
  )
}

export default App
