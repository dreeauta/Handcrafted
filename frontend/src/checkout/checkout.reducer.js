const INITIAL_STATE = {
  full_name: "",
  address: "",
  address2:"",
  city: "",
  zip: "",
  token: "",
  total: "",
  checkout_complete: false
}

export default function reducer( state = INITIAL_STATE, action) {
  if (action.type === 'onChangePurchase'){
    return Object.assign({}, state, {
      [action.name]: action.payload
    })
  }
    else if (action.type === 'submitPurchase'){
      return Object.assign({}, state, {
        checkout_complete: true
      })
    }
  return state;
}
