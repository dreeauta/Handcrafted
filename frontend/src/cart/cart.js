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



    let cartcheckout;

    if (this.props.items_in_cart === 0) {
    cartcheckout =  <span className="cart-checkout">

      <Link to="/checkout">  <button> Checkout </button></Link>

      </span>

    }
    else {
      cartcheckout = <p className="cart-checkout">
      Shopping Cart is Empty!
      </p>

    }

    return(
      <div className="cart-div">
      <span className="cart-title">
      Shopping Cart
      </span>


      { this.props.cart_items.map((input, idx) =>
    <p className="cart-display" key={idx}> <Link to={"/artworkItem/"+ input.id}> <img className="cart-image" src={input.image_path}/>
    </Link>
     <br/>
      <span className="cart-description"> { input.description }

      <br/> ${ input.price } </span>
    <button onClick={() => this.props.deletetheItem(this.props.cart_items[idx].product_id, this.props.token)}> Delete Item </button>
    </p>

      )}

      <span className="cart-delete">
      </span>



  { cartcheckout }
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
