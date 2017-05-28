import React from 'react';
import * as ReactRedux from 'react-redux';
import * as actions from './checkout.actions';
import { Link } from 'react-router';


class checkoutCart extends React.Component {

  render() {
    return (
<div>
  <center>
      <label> Name: </label>
      <input type="text" onChangePurchase={event => this.props.checkout.onChangePurchase(event.target.value, 'firstname')}/>
      <br/>
      <label> Address: </label>
      <input type="text" onChangePurchase={event =>
      this.props.checkout.onChangePurchase(event.target.value,'address')}/>
      <br/>
      <label> Address2: </label>
      <input type="text" onChangePurchase={event =>
      this.props.checkout.onChangePurchase(event.target.value,'address2')}/>
      <br/>
      <label> City: </label>
      <input type="text" onChangePurchase={event =>
      this.props.checkout.onChangePurchase(event.target.value,'city')}/>
      <br/>
      <label> Zip code: </label>
      <input type="text" onChangePurchase={event =>
      this.props.checkout.onChangePurchase(event.target.value,'zip')}/>
      <br/>
      <Link to={"/confirmation"}>
      <button onClick={() => this.props.checkout.submitPurchase(this.props.checkout.name, this.props.checkout.address, this.props.checkout.address2, this.props.checkout.city, this.props.checkout.zip)}>
      Confirm Purchase
      </button>
      </Link>

      </center>

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
