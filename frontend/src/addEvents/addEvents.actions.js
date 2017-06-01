import $ from 'jquery';
let cloudinary = window.cloudinary
let BASEURL = "http://locahost:3333";
if (window.location.hostname !== 'localhost') {
  BASEURL = '';
}

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
      url: BASEURL+'/api/events',
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
      function(error, result) {
      if (result !== undefined) {
      let url = ""
      result.forEach((result) => {
        url = result.url
      })
      dispatch({type: 'uploadImageSuccess', payload: url })
      }
    });
  }
  return asyncAction;
}
