import $ from 'jquery';

export function displayArtworkDetail(data) {
  return {
    type: 'displayArtworkDetail',
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

export function fetchArtworkDetail(id) {
  let asyncAction = function(dispatch) {
    $.ajax({
      method: 'GET',
      url: 'http://localhost:4000/api/artwork/' + id
    })
    .then(data => dispatch(displayArtworkDetail(data)))
    .catch(resp => dispatch(pageError(resp)))
  }
  return asyncAction;
}
