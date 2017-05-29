const INITIAL_STATE = {
  cart_items: [],
  token: ""

}


export default function reducer(state = INITIAL_STATE, action) {
  if (action.type === 'displayCart'){
    return Object.assign({}, state, {
      cart_items: action.payload
    })
  }
  else if (action.type === 'addToCart'){
    return Object.assign({}, state, {
      cart_items: action.payload.cart_items,
      token: action.payload.auth_token
    })
  }
  else if (action.type === 'deleteItem') {
    return Object.assign({}, state, {
      cart_items: action.payload
    })
}
  return state;
}
