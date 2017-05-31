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

// var handler = StripeCheckout.configure({
//   // publishable key
//   key: 'pk_test_gueNUYd91f9K8pegsWsTk0gb',
//   locale: 'auto',
//   token: function callback(token) {
//     var stripeToken = token.id;
//     // Make checkout API call here and send the stripe token
//     // to the back end
//   }
// });
// // this actually opens the popup modal dialog
// handler.open({
//   name: 'My awesome store',
//   description: 'Some magazines',
//   amount: amount * 100
// });
