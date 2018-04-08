
import { combineReducers } from 'redux'

import input from './input-reducer'
import cart from './cart-reducer'

export default combineReducers({
  input: input,
  cart: cart,
})