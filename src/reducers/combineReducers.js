const combineReducers = (reducers = []) => (state, action) =>
  reducers.reduce((state, reducer) => reducer(state, action), state)

export default combineReducers
