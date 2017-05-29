import $ from 'jquery';

export function displayArtCover(data){
  return {
    type: 'displayArtCover',
    payload: data
  }
}

// export function displayArtist(data){
//   return {
//     type: 'displayArtist',
//     payload: data
//   }
// }

export function pageError(resp) {
  let error = (resp && resp.responseJSON && resp.responseJSON.message) || 'Fix me!';
  return {
    type: 'page_error',
    error: error
  };
}


export function fetchArtCover(/*title*/){
  let asyncAction = function(dispatch) {
    $.ajax({
      method:'GET',
      url: 'http://localhost:4000/api/artwork'
    })
    .then(data => dispatch(displayArtCover(data)))
    .catch(resp => dispatch(pageError(resp)))
  };
  return asyncAction;
}
