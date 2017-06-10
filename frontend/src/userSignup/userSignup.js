import React from 'react';
import * as ReactRedux from 'react-redux';
import * as actions from './userSignup.actions';
import { Link } from 'react-router';

// import sha1 from 'sha1';
// import superagent from 'superagent';
//


class userSignup extends React.Component {


  disableSignup(){
      let disableSignup = true;
      if (this.props.signup.username.length > 0 && this.props.signup.firstname.length > 0 &&
        this.props.signup.lastname.length > 0 && this.props.signup.email.length > 0 &&
      this.props.signup.password > 0) {
          disableSignup = false;
      }
      return disableSignup;
  }

  render(){

    return (
      <div className="background-div">

      <span className="signup-title"> Create New Account  </span>

      <div className="signup-form">
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

      <Link to={"/login"}>
      <button className="signup-btn" type="button" disabled={this.disableSignUp()} onClick={() => this.props.submit(this.props.signup.username, this.props.signup.firstname, this.props.signup.lastname, this.props.signup.email, this.props.signup.password)}> SignUp </button> </Link>

      </div>

      <img className="signup-tree-gif" src="./tree.gif"/>

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
