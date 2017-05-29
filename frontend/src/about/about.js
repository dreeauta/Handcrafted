import React from 'react';
import '.././index.css';
import * as ReactRedux from 'react-redux';
// import { Link } from 'react-router';


export default class about extends React.Component {

  render() {

    return (
      <div>

      <img src="./about/about-title.png"/>


      <br/>
<p>
      Bringing together the talent of Atlanta on one page. Shop local.
      </p>
      <br/>
      <img className="tree-background-about" src="./tree-background.jpg"/>


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
