const INITIAL_STATE = {
  cartItems: [],
  token: ""

}


export default function reducer(state = INITIAL_STATE, action) {
  if (action.type === 'shopping-cart'){
    return Object.assign({}, state, {
      cartItems: action.payload
    })
  }
  else if (action.type === 'deleteItem') {
    return Object.assign({}, state, {
      cartItems: action.payload
    })
}
  return state;
}
