const INITIAL_STATE = {
  name: "",
  description: "",
  location: "",
  date: "",
  time: "",
  image: "",
  link: ""
}

export default function reducer(state = INITIAL_STATE, action) {
  if (action.type === 'onChangeEvents'){
    return Object.assign({}, state, {
      [action.name]: action.payload
    })
  }
  else if (action.type === "submitEvents"){

  }
  return state;
}
