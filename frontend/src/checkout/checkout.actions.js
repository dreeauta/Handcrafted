import $ from 'jquery';

export function onChangePurchase(data, propName){
  return {
    type: 'onChangePurchase',
    payload: data,
    name: propName
  }
}

export function submitPurchase(customer_id, total_price, address, address2, city, zip){
  let asyncAction = function(dispatch) {
    $.ajax({
      method: 'POST',
      url: 'http://localhost:4000/api/checkout',
      data: JSON.stringify({
        customer_id: customer_id,
        total_price: total_price,
        address2: address2,
        city: city,
        zip: zip
      }),
      contentType: 'application/json'
    })
    .then(data => dispatch({ type: 'submitPurchase', payload: data}))
  }
  return asyncAction
}
