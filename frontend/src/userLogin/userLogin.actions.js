import $ from 'jquery';
import { hashHistory } from 'react-router';
let BASEURL = "http://locahost:3000";
if (window.location.hostname !== 'localhost') {
  BASEURL = "";
}


export function loginChange(data, propName){
  return {
    type: 'loginChange',
    payload: data,
    name: propName
  }
}


export function logout() {
  return {
    type: 'logout'
  }
}



export function submitLogin(username, password) {
  let asyncAction = (dispatch) => {
    $.ajax({
      url: '${BASEURL}/api/user/login',
      method: 'POST',
      data: JSON.stringify({
        username: username,
        password: password
      }),
      contentType: 'application/json'
    })
    .then(data => {
      dispatch({
        type: 'submitLogin',
        payload: data
      });
      hashHistory.push('/');
    })
    .catch(resp => {
      dispatch({
        type: 'loginerror'
      });
    })
  };
  return asyncAction;
}
