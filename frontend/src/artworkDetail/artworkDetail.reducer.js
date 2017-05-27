const INITIAL_STATE = {
  art_gallery: [],
  token: ""
};

export default function reducer(state = INITIAL_STATE, action) {
  if (action.type === "displayArtworkDetail"){
    return Object.assign({}, state, {
      art_gallery: action.payload
    })
  }
  return state;
}
