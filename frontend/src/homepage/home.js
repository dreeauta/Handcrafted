import React, { Component } from 'react';
import '.././App.css';
import * as ReactRedux from 'react-redux';
import * as actions from './home.actions';
import { Link } from 'react-router';



class home extends React.Component {
  componentDidMount() {
    this.props.fetchImages(this.props.params.data)
  }


  render() {

 let loginName;
    let token = this.props.login.token;
    console.log(this.props);
    if (token) {
      loginName = "hi " + this.props.login.firstname + "!";
    }



    return (
    <div>
    <p>  { loginName }  </p>


    <center>
    <h1> HandCrafted - ATL </h1>

      <br/>
      <br/>
      <div className="featured-artist">
      Featured Artist of the Month:
      <br/>
      <br/>
      Artist

      <br/>

      </div>

      <img src="./andreeaart.jpg" alt="andreea-art"/>


      </center>

    </div>
  );
  }
}


const homeContainer = ReactRedux.connect(
    state => state,
    // removed state.listing, to access token, now props become this.props.listing.allImages
//  state.listing,

    actions
)(home);

export default homeContainer;
