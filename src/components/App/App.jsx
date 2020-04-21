import React, { useReducer } from "react"
import AppContext from "../../AppContext"
import { combineReducers, rootReducer } from "../../reducers"
import NumberBox from "../NumberBox/NumberBox"
import "./App.css"

const App = () => {
  const [state, dispatch] = useReducer(
    combineReducers([rootReducer]),
    rootReducer()
  )

  return (
    <AppContext.Provider value={dispatch}>
      <div className="App">
        <NumberBox label={144} highlighted={true} />
      </div>
    </AppContext.Provider>
  )
}

export default App
