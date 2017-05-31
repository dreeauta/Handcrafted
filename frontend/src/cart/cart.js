import React from 'react';
import '.././index.css';
import * as ReactRedux from 'react-redux';
import * as actions from './cart.actions';
import { Link } from 'react-router';

class shoppingCart extends React.Component {
  componentDidMount() {
    if (this.props.token) {
      this.props.fetchCart(this.props.token)
    }
  }
  componentWillReceiveProps(newProps) {
    if (this.props.auth_token !== newProps.token){
      this.props.fetchCart(newProps.token);
    }
  }


  render() {

    let displaycartItems;

    if (this.props.cart.shoppingcartItems){
      displaycartItems = this.props.cart.shoppingcartItems.map((input, idx) =>
    <p key={idx}> <img src={input.image_path}/> <br/>
    this.props.cart.shoppingcartItems.price
    </p>
      );
    }


    return(
      <div>
      <img src="./cart/cart-title.png"/>
      <p>

      { this.props.artworkItem.artworkItem.name}
      <img src={ this.props.artworkItem.artworkItem.image_path}/>
      <button onClick={() => this.props.deleteItem(this.props.artworkItem.artworkItem.id)}> Delete Item </button>

      </p>

    <Link to="/checkout">  <button> Checkout </button></Link>
      </div>

    );
  }
}

const cartContainer = ReactRedux.connect(
  state => state,
  // state.cart
  actions
)(shoppingCart);

export default cartContainer;
