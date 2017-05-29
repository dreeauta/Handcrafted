import React from 'react';
import * as ReactRedux from 'react-redux';
import * as actions from './checkout.actions';
import { Link } from 'react-router';


class checkoutCart extends React.Component {

  render() {
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
      <button onClick={() => this.props.submitPurchase(this.props.checkout.name, this.props.checkout.address, this.props.checkout.address2, this.props.checkout.city, this.props.checkout.zip)}>
      Confirm
      </button>
      </Link>


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
