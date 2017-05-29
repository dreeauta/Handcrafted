import React, { Component } from 'react';
import '.././index.css';
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

    <img className="handcrafted-title" src="./home/handcrafted-title.png"/>

      <p className="home-slogan"> One of a kind pieces made with <img src="./home/heart.png"/> from the artists of ATL.  </p>


      <img className="pen-gif" src="./home/pen.gif" alt="pen-gif"/>


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
