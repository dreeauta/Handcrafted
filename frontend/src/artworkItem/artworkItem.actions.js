import $ from 'jquery';

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
