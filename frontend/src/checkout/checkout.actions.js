import $ from 'jquery';
import { hashHistory } from 'react-router';
let BASEURL = "http://locahost:3000";
if (window.location.hostname !== 'localhost') {
  BASEURL = "";
}

export function onChangePurchase(data, propName){
  return {
    type: 'onChangePurchase',
    payload: data,
    name: propName
  }
}

// export function updateTotal(id,value){
//   return {
//     type: 'update_checkout',
//     id,
//     value
//   };
// };


export function submitPurchaseInfo(customer_id, total_price, address, address2, city, zip,email){
  let asyncAction = function(dispatch) {
    $.ajax({
      method: 'POST',
      url: '${BASEURL}/api/checkout',
      data: JSON.stringify({
        customer_id: customer_id,
        total_price: total_price,
        address2: address2,
        city: city,
        zip: zip,
        email: email
      }),
      contentType: 'application/json'
    })
    .then(data => dispatch({ type: 'submitPurchaseInfo', payload: data}))
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


export function creditcard(amount, token) {
    let asyncAction = function(dispatch) {
        let handler = window.StripeCheckout.configure({
            key: 'pk_test_TBTmaqlCrmmjDKWSSYI2G66g',
            // image: '/envelope.png',
            locale: 'auto',
            token: function callback(stripeToken) {
              $.ajax({
                  type: 'POST',
                  url: '${BASEURL}/api/ccinfo',
                  contentType: 'application/json',
                  data: JSON.stringify({
                      stripeToken: stripeToken.id,
                      amount: amount,
                      token
                  })
              })

            }
        });
        handler.open({
            name: 'Handcrafted',
            description: 'art',
            amount: amount
        });
    }
    return asyncAction;
}
