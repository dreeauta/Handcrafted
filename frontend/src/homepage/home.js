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




    return (
    <div>


    <video id="background-video" loop autoPlay   muted off>
      <source src="./home/paintvideo-trim.mp4" type="video/mp4"/>
      <source src="./home/paintvideo-trim.mp4" type="video/ogg"/>
      Your browser does not support the video tag.
    </video>


    <div className="home-title">
  <span className="handcrafted-title"> HANDCRAFTED </span>

      <br/>
       One of a kind pieces made with <img src="./home/heart.png"/> from the artists of ATL.

       </div>



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
