import $ from 'jquery';
import {hashHistory} from 'react-router';
let BASEURL = "http://locahost:3333";
if (window.location.hostname !== 'localhost') {
  BASEURL = '';
}

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
      url: BASEURL +'/api/artworkItem/' + id
    })
    .then(data => dispatch(displayartworkItem(data)))
    .catch(resp => dispatch(pageError(resp)))
  }
  return asyncAction;
}

export function addToCart(id, token) {
  return function(dispatch) {
    $.ajax({
      method: 'POST',
      url: BASEURL +'/api/shopping_cart/',
      data: JSON.stringify({
        id: id,
        token: token
      }),
      contentType: 'application/json'
    })
    .then(data => dispatch({type: 'addToCart', payload: data}))
    .catch(resp => {
      let error = resp.responseJSON && resp.responseJSON.message || 'Did not work';
      dispatch({
        type: 'add-to-cart-error',
        error: error
      });
    })
  };
}
