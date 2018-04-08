const initialState = []

export default (state = initialState, action) => {
  if (action.type === 'Cart') {
    return action.payload
  }
  else {
    return initialState
  }
}