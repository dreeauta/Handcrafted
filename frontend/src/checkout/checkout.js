import React from 'react';
import * as ReactRedux from 'react-redux';
import * as actions from './checkout.actions';
import { Link } from 'react-router';


class checkoutCart extends React.Component {

  render() {

    let total=0;

    if (this.props.cart_item) {
      this.props.cart_items.map(input =>
      total = input.price++)
    }


    return (
<div className="checkout-div">

<span className="checkout-title">
  Checkout
</span>

    <div className="checkout-form">
      <label> Name: </label>
      <br/>

      <input type="text" onChange={event => this.props.onChangePurchase(event.target.value, 'full_name')}/>
      <br/>
      <label> Address: </label>
      <br/>

      <input type="text" onChange={event =>
      this.props.onChangePurchase(event.target.value,'address')}/>
      <br/>

      <label> Address2: </label>
      <br/>

      <input type="text" onChange={event =>
      this.props.onChangePurchase(event.target.value,'address2')}/>
      <br/>

      <label> City: </label>
      <br/>

      <input type="text" onChange={event =>
      this.props.onChangePurchase(event.target.value,'city')}/>
      <br/>

      <label> Zip code: </label>
      <br/>
      <input type="text" onChange={event =>
      this.props.onChangePurchase(event.target.value,'zip')}/>
      <br/>
      <label> email: </label>
      <br/>
      <input type="text" onChange={event =>
      this.props.onChangePurchase(event.target.value,'email')}/>
      </div>

      <div className="checkout-items">
      { this.props.cart.cart_items.map((input, idx) =>
    <p key={idx}> <img className="checkout-image" src={input.image_path}/>
    <span className="checkout-name"> {input.name}
    </span>
    <span className="checkout-price">    ${ input.price }
    </span>

    </p>)}

      </div>

      <span className="checkout-total">
        Total: ${total}.00

        <br/>
      <button onClick={() => this.props.creditcard(this.props.checkout.total, this.props.login.token)}>
      Add Credit Card
      </button>

      </span>

      <br/>

      <span className="checkout-confirm">
      <Link to={"/confirmation"}>
      <button onClick={() => this.props.submitPurchaseInfo(this.props.login, this.props.checkout.total, this.props.checkout.address, this.props.checkout.address2, this.props.checkout.city, this.props.checkout.zip,
      this.props.checkout.email)}>
      Confirm Purchase
      </button>
      </Link>
      </span>


      </div>
    )
  }
}

const checkoutContainer = ReactRedux.connect(
  state => state,
  // state.checkout
  actions
)(checkoutCart);

export default checkoutContainer
