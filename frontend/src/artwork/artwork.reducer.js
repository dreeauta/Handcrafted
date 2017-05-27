const INITIAL_STATE = {
  featured_artist: [],
  token: ""
};


export default function reducer(state = INITIAL_STATE, action) {
  if (action.type === 'displayArtCover') {
    return Object.assign({}, state, {
      featured_artist: action.payload
    });
  }
  // if (action.type === 'displayArtist'){
  //   return Object.assign({}, state, {
  //     artistName: action.payload
  //   });
  // }
  if (action.type === 'page_error'){
    return Object.assign({}, state, {
      error: action.error
    });
  }
  return state;
}
