import $ from 'jquery';





export function pageError(resp){
  let error = (resp && resp.responseJSON && resp.responseJSON.message) || 'Help!';
  return {
    type: 'page_error',
    error: error
  };
}

export function getShoppingCart(token) {
  console.log('token': token);
  return (dispatch) => {
    $.get('http://localhost:4000/api/shopping_cart', { token: token })
      .then(data => {
        dispatch({
          type: 'shopping-cart',
          payload: data
        });
      })
      .catch(resp => {
        let error = resp.responseJSON && resp.responseJSON.message || 'Something went wrong';
        dispatch({
          type: 'shopping-cart-error',
          error: error
        });
      });
  };
}


export function deleteItem(id, token) {
  console.log(id)
  let asyncAction = function(dispatch) {
    $.ajax({
      method: 'DELETE',
      url: 'http://localhost:4000/api/shopping_cart/',
      data: JSON.stringify({
        id: id,
        token: token
      }),
      contentType: 'application/json'
    })
      .then(data => dispatch({ type: 'deleteItem', payload: data}))
      .catch(resp => dispatch(pageError(resp)))
  }
  return asyncAction
}
