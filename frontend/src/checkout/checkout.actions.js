import $ from 'jquery';
import { hashHistory } from 'react-router';

export function onChangePurchase(data, propName){
  return {
    type: 'onChangePurchase',
    payload: data,
    name: propName
  }
}

export function submitPurchaseInfo(customer_id, total_price, address, address2, city, zip,email){
  let asyncAction = function(dispatch) {
    $.ajax({
      method: 'POST',
      url: 'http://localhost:4000/api/checkout',
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


export function creditcard(amount, token, email) {
    let asyncAction = function(dispatch) {
        let handler = StripeCheckout.configure({
            key: 'pk_test_TBTmaqlCrmmjDKWSSYI2G66g',
            // image: '/envelope.png',
            locale: 'auto',
            token: function callback(token) {
                var stripeToken = token.id;
                console.log('Public stripe token recieved if payment info verified: ', stripeToken);
                // If verified, send stripe token to backend
                $.ajax({
                    type: 'POST',
                    url: BASEURL + '/api/ccinfo',
                    contentType: 'application/json',
                    data: JSON.stringify({
                        stripeToken: stripeToken,
                        email: email,
                        amount: amount
                    })
                })
                // After payment is processed in the back end send another request to update the database and set state
                .then(response => {
                    $.ajax({
                        type: 'POST',
                        url: 'http://localhost:4000/api/ccinfo'
                        contentType: 'application/json',
                        data: JSON.stringify({
                            token: token
                        })
                    })
                    .then(response => {
                        hashHistory.push('/confirmation');
                        dispatch({
                            type: 'purchase-confirmed'
                        })
                    })
                })
            }
        });
        handler.open({
            name: 'Handcrafted',
            amount: amount
        });
    }
    return asyncAction;
}
