import React from 'react';
import * as ReactRedux from 'react-redux';
import * as actions from './artistSignup.actions';
import { Link } from 'react-router';

// import sha1 from 'sha1';
// import superagent from 'superagent';
//



class artistSignupForm extends React.Component {


  render(){

    return (
      <div className="background-div">

      <span className="artistSignup-title"> Artist Profile  </span>

      <div className="signup-form">
        <label> First Name: </label>
        <br/>
        <input type="text" onChange={event => this.props.onChange(event.target.value, 'firstname')} />
      <br/>
        <label> Last Name: </label>
        <br/>

        <input type="text" onChange={event => this.props.onChange(event.target.value, 'lastname')}/>
        <br/>
        <label> Contact Email: </label>
        <br/>

        <input type="email" onChange={event => this.props.onChange(event.target.value, 'email')}/>
      <br/>
        <label> City: </label>
        <br/>
        <input type="text" onChange={event => this.props.onChange(event.target.value, 'city')}/>
      <br/>
        <label> Social Media: </label>
        <br/>
        <label> Facebook: </label>
        <input type="text" onChange={event => this.props.onChange(event.target.value, 'facebook')} />
        <br/>
        <label> Instagram: </label>

        <input type="text" onChange={event => this.props.onChange(event.target.value, 'instagram')} />

      <br/>
      <button  onClick={event =>this.props.uploadEventImage(event.target.value,'image')}> Upload Profile Picture </button>

    <br/>
    <br/>

      <Link to={"/artistProfile"}>
      <button className="signup-btn" onClick={() => this.props.submit(this.props.signup.username, this.props.signup.firstname, this.props.signup.lastname, this.props.signup.email, this.props.signup.password)}> SignUp </button> </Link>

      </div>

      <img className="signup-tree-gif" src="./tree.gif"/>

      </div>

    );
  }
}


const artistSigupFormContainer = ReactRedux.connect(
  state => state,
  //  reducer artist_signup

  actions
)(artistSignupForm);

export default artistSigupFormContainer;
