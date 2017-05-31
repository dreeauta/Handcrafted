import $ from 'jquery';
import {hashHistory} from 'react-router';


export function displayartworkItem(data) {
  return {
    type: 'displayartworkItem',
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

export function fetchartworkItem(id) {
  let asyncAction = function(dispatch) {
    $.ajax({
      method: 'GET',
      url: 'http://localhost:4000/api/artworkItem/' + id
    })
    .then(data => dispatch(displayartworkItem(data)))
    .catch(resp => dispatch(pageError(resp)))
  }
  return asyncAction;
}

export function addToCart(id, customer_id) {
  let asyncAction = function(dispatch) {
    $.ajax({
      method: 'POST',
      url: 'http://localhost:4000/api/shopping_cart/',
      data: JSON.stringify({
        id: id,
        customer_id: customer_id
      }),
      contentType: 'application/json'
    })
    .then(data => dispatch({type: 'addToCart', payload: data}))
    .catch(resp => dispatch(pageError(resp)))

  }
  return asyncAction

}
