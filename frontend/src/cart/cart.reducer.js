const INITIAL_STATE = {
  cart_items: [],
  token: "",
  items_in_cart: false

}


export default function reducer(state = INITIAL_STATE, action) {
  if (action.type === 'shopping-cart'){
    return Object.assign({}, state, {
      cart_items: action.payload
    })
  }
  else if (action.type === 'deleteItem') {
    return Object.assign({}, state, {
      cart_items: action.payload
    })
}
else if (action.type === "addToCart"){
  return Object.assign({}, state, {
    cart_items: action.payload,
    items_in_cart: true
  })
}
  return state;
}
