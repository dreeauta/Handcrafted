import $ from 'jquery';
let BASEURL = "http://locahost:3333";
if (window.location.hostname !== 'localhost') {
  BASEURL = "";
}

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
      url: BASEURL +'/api/artwork'
    })
    .then(data => dispatch(displayArtCover(data)))
    .catch(resp => dispatch(pageError(resp)))
  };
  return asyncAction;
}
