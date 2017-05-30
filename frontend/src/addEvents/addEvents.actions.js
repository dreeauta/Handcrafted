import $ from 'jquery';
let cloudinary = window.cloudinary


export function onChangeEvents(data, propName) {
  return{
    type: 'onChangeEvents',
    payload: data,
    name: propName
  }
}

export function submitEvents(name, description, location, date, time, image, link) {
  let asyncAction = function(dispatch) {
    $.ajax({
      method: 'POST',
      url: 'http://localhost:4000/api/events',
      data: JSON.stringify({
        name: name,
        description: description,
        location: location,
        date: date,
        time: time,
        image: image,
        link: link
      }),
      contentType: 'application/json'
    })
    .then(data => dispatch({ type: 'submitEvents', payload: data}))
  }
  return asyncAction
}


export function uploadEventImage() {
  let asyncAction = function(dispatch) {
    cloudinary.openUploadWidget({ cloud_name: 'dsyp1npet', upload_preset: 'sajrpxda'},
      function(error, result) { console.log(error, result) });
  }
  return asyncAction;
}
