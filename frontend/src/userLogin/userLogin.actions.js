import $ from 'jquery';
import { hashHistory } from 'react-router';


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



export function login(username, password) {
  let asyncAction = (dispatch) => {
    $.ajax({
      url: 'http://localhost:4000/api/user/login',
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
