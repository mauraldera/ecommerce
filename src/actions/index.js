export const assignInput = (input) => {
  return {
    type: 'Input',
    payload: input,
  }
}

export const addToCart = (cart, item) => {
  const newCart = [
    ...cart,
    item
  ]
  return {
    type: 'Cart',
    payload: newCart,
  }
}