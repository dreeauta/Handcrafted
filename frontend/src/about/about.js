import React from 'react';
import '.././index.css';
import * as ReactRedux from 'react-redux';
// import { Link } from 'react-router';


export default class about extends React.Component {

  render() {

    return (
      <div className="about-div">

      <span className="about-title">
        ABOUT <br/> HANDCRAFTED
      </span>

      <img className="about-background" src="./about/backgroundimage.jpg"/>


      <div className="about-box">
      <p className="about-content">
      Bringing together the talent of Atlanta on one page.
      <br/>
      <br/>
      Handcrafted provides a space for Atlanta artists and makers to sell and buy art. Also stay up to date on the latest art events and shows.
      <br/>
      <br/>
      Shop local.
      <br/>
      <br/>
      -Andreea Uta
      <br/>
      <a href="https://github.com/dreeauta/art-app"> GitHub </a>

      </p>
      </div>


      </div>

    );
  }
}


// const aboutContainer = ReactRedux.connect(
//   state => state.aboutthesite,
//
//   actions
// )(about);

// export default aboutContainer;
