import React from 'react';
import * as ReactRedux from 'react-redux';
import * as actions from './checkout.actions';
import { Link } from 'react-router';


class checkoutCart extends React.Component {

  render() {

    let all_items = this.props.cart.cart_items.map((input,idx) => {
      <span key={idx} > {input.name} <br/>
      <img src={input.image_path}/> {input.price} </span>
    });

  let total= 0;

  total = this.props.cart.cart_items.map((input, idx) => {
        total += input.price;
      })

    return (
<div>
<center>

<img src="./checkout/checkout-title.png"/>
  </center>


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

      <Link to={"/confirmation"}>
      <button onClick={() => this.props.submitPurchase(this.props.login, total, this.props.checkout.address, this.props.checkout.address2, this.props.checkout.city, this.props.checkout.zip)}>
      Confirm
      </button>
      </Link>

        { this.props.artworkItem.artworkItem.name}
        <img src={this.props.artworkItem.artworkItem.image_path}/>

        <br/>
        total price: ${total}.00
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
