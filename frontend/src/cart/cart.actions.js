import $ from 'jquery';


export function displayCart(data) {
  return {
    type: 'displayCart',
    payload: data
  }
}


export function pageError(resp){
  let error = (resp && resp.responseJSON && resp.responseJSON.message) || 'Help!';
  return {
    type: 'page_error',
    error: error
  };
}

export function fetchCart(data){
  let asyncAction = function(dispatch) {
    $.ajax({
      method:'GET',
      url: 'http://localhost:4000/api/shopping_cart/'
    })
    .then(data => dispatch(displayCart(data)))
    .catch(resp => dispatch(pageError(resp)))
  }
  return asyncAction;
}


export function deleteItem(id, customer_id) {
  let asyncAction = function(dispatch) {
    $.ajax({
      method: 'DELETE',
      url: 'http://localhost:4000/api/shopping_cart/',
      data: JSON.stringify({
        product_id: id,
        customer_id: customer_id
      }),
      contentType: 'application/json'
    })
      .then(data => dispatch({ type: 'deleteItem', payload: data}))
      .catch(resp => dispatch(pageError(resp)))
  }
  return asyncAction
}
