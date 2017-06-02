import React from 'react';
import * as ReactRedux from 'react-redux';
import { Link } from 'react-router';


class confirmation extends React.Component {


  render(){

    return (
      <div className="confirmation-div">

      <img className="confirmation-image" src="about/backgroundimage.jpg"/>

      <div className="confirmation-message">
      Thank you for shopping local!
      </div>

      </div>

    );
  }
}


const confirmationContainer = ReactRedux.connect(
  state => state,
  //  reducer state.confirmation

)(confirmation);

export default confirmationContainer;
