import $ from 'jquery';
let BASEURL = "http://locahost:3333";
if (window.location.hostname !== 'localhost') {
  BASEURL = "";
}

export function displayArtworkDetail(data) {
  console.log(data);
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
  console.log(id);
  let asyncAction = function(dispatch) {
    $.ajax({
      method: 'GET',
      url: BASEURL +'/api/artwork/' + id.toString(),
      dataType: 'json'
    })
    .then(data => dispatch(displayArtworkDetail(data)))
    .catch(resp => dispatch(pageError(resp)))
  }
  return asyncAction;
}
