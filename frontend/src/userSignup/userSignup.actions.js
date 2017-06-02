import $ from 'jquery';
const BASEURL = 'http://localhost:3333';
if (window.location.hostname !== 'localhost') {
  BASEURL = '';
}


export function onChange(data, propName) {
  return{
    type: 'onChange',
    payload: data,
    name: propName
  }
}

export function submit(username, firstname, lastname, email, password, user_image) {
      let asyncAction = function(dispatch) {
        $.ajax({
          method: 'POST',
          url: BASEURL +'/api/user/signup',
          data: JSON.stringify({
            username: username,
            password: password,
            first_name: firstname,
            last_name: lastname,
            email: email,
            user_image: user_image
          }),
          contentType: 'application/json'
        })
        .then(data => dispatch({type: 'submit', payload: data}))
      }
    return asyncAction
}
