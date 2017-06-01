import React from 'react';
import '.././index.css';
import * as ReactRedux from 'react-redux';
import * as actions from './cart.actions';
import { Link } from 'react-router';

class shoppingCart extends React.Component {
  componentDidMount() {
    if (this.props.token) {
      this.props.getShoppingCart(this.props.token)
    }
  }
  componentWillReceiveProps(newProps) {
    if (this.props.token !== newProps.token){
      this.props.getShoppingCart(newProps.token);
    }
  }


  render() {

    return(
      <div className="cart-div">
      <span className="cart-title">
      Shopping Cart
      </span>

      <table>
      <th className="cart-img">


      <span className="cart-delete">
      </span>
      </th>
      </table>


      { this.props.cart_items.map((input, idx) =>
    <p key={idx}> <img src={input.image_path}/> <br/>
    { input.price }
    <button onClick={() => this.props.deleteItem(this.props.cart_items.id, this.props.token)}> Delete Item </button>


    </p>

      )}

    <span className="cart-checkout">

    <Link to="/checkout">  <button> Checkout </button></Link>

    </span>

      </div>

    );
  }
}

const cartContainer = ReactRedux.connect(
  state => Object.assign({},
    state.cart, {
    token: state.login
      && state.login.token
  }),
  actions
)(shoppingCart);

export default cartContainer;
