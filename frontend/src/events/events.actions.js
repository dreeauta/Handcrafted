import $ from 'jquery';


export function displayEvents(data){
  return {
    type: 'displayEvents',
    payload: data
  }
}


export function pageError(resp){
  let error = (resp && resp.responseJSON && resp.responseJSON.message) || 'fix me!';
  return {
    type: 'page_error',
    error: error
  };
}


export function fetchEvents(title){
  let asyncAction = function(dispatch) {
    $.ajax({
      method:'GET',
      url: 'http://localhost:4000/api/events'
    })
    .then(data => dispatch(displayEvents(data)))
    .catch(resp => dispatch(pageError(resp)))
  };
  return asyncAction;
}
