import React from 'react';
import * as ReactRedux from 'react-redux';
import * as actions from './userSignup.actions';
import { Link } from 'react-router';
import Dropzone from 'react-dropzone';
import { cloudinaryConfig, CloudinaryImage, CloudinaryVideo } from 'react-cloudinary';

// import sha1 from 'sha1';
// import superagent from 'superagent';
//



class userSignup extends React.Component {


  render(){

    return (
      <div className="background-div">

      <center>
      <img src="./signup/signup-title.png"/>

      </center>
      <br/>
        <label> First Name: </label>
        <br/>
        <input type="text" onChange={event => this.props.onChange(event.target.value, 'firstname')} />
      <br/>
        <label> Last Name: </label>
        <br/>

        <input type="text" onChange={event => this.props.onChange(event.target.value, 'lastname')}/>
        <br/>
        <label> Email: </label>
        <br/>

        <input type="email" onChange={event => this.props.onChange(event.target.value, 'email')}/>
      <br/>
        <label> Username: </label>
        <br/>
        <input type="text" onChange={event => this.props.onChange(event.target.value, 'username')}/>
      <br/>
        <label> Password: </label>
        <br/>

        <input type="password" onChange={event => this.props.onChange(event.target.value, 'password')} />
      <br/>



      <br/>

      <Link to={"/login"}>
      <button className="signup-btn" onClick={() => this.props.submit(this.props.signup.username, this.props.signup.firstname, this.props.signup.lastname, this.props.signup.email, this.props.signup.password)}> SignUp </button> </Link>

      <br/>
      <img className="tree-background-signup" src="./tree-background.jpg"/>


      </div>

    );
  }
}


const userSignupContainer = ReactRedux.connect(
  state => state,
  //  reducer signup

  actions
)(userSignup);

export default userSignupContainer;
