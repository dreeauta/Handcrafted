const INITIAL_STATE = {
  artworkItem: "",
  token: ""
}

export default function reducer(state = INITIAL_STATE, action) {
  if (action.type === "displayartworkItem"){
    return Object.assign({}, state, {
      artworkItem: action.payload
    })
  }
  return state;
}
