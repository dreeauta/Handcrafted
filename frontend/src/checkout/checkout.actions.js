import $ from 'jquery';

export function onChangePurchase(data, propName){
  return {
    type: 'onChangePurchase',
    payload: data,
    name: propName
  }
}

export function submitPurchase(name, address, address2, city, zip){
  let asyncAction = function(dispatch) {
    $.ajax({
      method: 'POST',
      url: 'http://localhost:4000/api/checkout',
      data: JSON.stringify({
        name: name,
        address: address,
        address2: address2,
        city: city,
        zip: zip
      }),
      contentType: 'application/json'
    })
    .then(data => dispatch({ type: 'submit', payload: data}))
  }
  return asyncAction
}
