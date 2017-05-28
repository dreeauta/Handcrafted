const INITIAL_STATE = {
  name: "",
  address: "",
  address2:"",
  city: "",
  zip: "",
  token: ""
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
