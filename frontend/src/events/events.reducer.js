const INITIAL_STATE = {
  all_events: [],
  token: ""
};

export default function reducer(state = INITIAL_STATE, action)
{
  if (action.type === 'displayEvents'){
    return Object.assign({}, state, {
      all_events: action.payload
    });
  }

  if (action.type === 'page_error'){
  return Object.assign({}, state, {
    error: action.error
  });
}
  return state;
}
