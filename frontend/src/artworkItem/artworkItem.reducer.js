const INITIAL_STATE = {
  artworkItem: "",
  token: "",
  addedToCart: false
}

export default function reducer(state = INITIAL_STATE, action) {
  if (action.type === "displayartworkItem"){
    return Object.assign({}, state, {
      artworkItem: action.payload
    })
  }
  if (action.type === "add-to-cart-success"){
    return Object.assign({}, state, {
      addedToCart: true
    })
  }
  return state;
}
