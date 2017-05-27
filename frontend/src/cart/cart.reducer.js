const INITIAL_STATE = {
  shoppingcartItems: [],
  token: ""

}


export default function reducer(state = INITIAL_STATE, action) {
  if (action.type === 'displayCart'){
    return Object.assign({}, state, {
      shoppingcartItems: action.payload
    })
  }
  else if (action.type === 'deleteItem') {
    return Object.assign({}, state, {
      shoppingcartItems: action.payload
    })
}
  return state;
}
