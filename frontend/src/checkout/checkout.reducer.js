const INITIAL_STATE = {
  full_name: "",
  address: "",
  address2:"",
  city: "",
  zip: "",
  email: "",
  token: "",
  total: ""
}

export default function reducer( state = INITIAL_STATE, action) {
  if (action.type === 'onChangePurchase'){
    return Object.assign({}, state, {
      [action.name]: action.payload
    })
  }
    else if (action.type === 'submitPurchase'){
  }

  return state;
}
