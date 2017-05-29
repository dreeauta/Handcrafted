import React from 'react';
import * as ReactRedux from 'react-redux';
import * as actions from './userSignup.actions';
import { Link } from 'react-router';
import { FileUpload } from 'redux-file-upload'



class userSignup extends React.Component {

  render(){
    return (
      <div>
      <center>
      Sign Up
      <br/>
      <br/>
        <label> First Name: </label>
        <input type="text" onChange={event => this.props.signup.onChange(event.target.value, 'firstname')} />
      <br/>
        <label> Last Name: </label>
        <input type="text" onChange={event => this.props.signup.onChange(event.target.value, 'lastname')}/>
      <br/>
        <label> Email: </label>
        <input type="email" onChange={event => this.props.signup.onChange(event.target.value, 'email')}/>
      <br/>
        <label> Username: </label>
        <input type="text" onChange={event => this.props.signup.onChange(event.target.value, 'username')}/>
      <br/>
        <label> Password: </label>
        <input type="password" onChange={event => this.props.signup.onChange(event.target.value, 'password')} />
      <br/>

      <br/>

      <Link to={"/login"}>
      <button onClick={() => this.props.signup.submit(this.props.signup.username, this.props.signup.firstname, this.props.signup.lastname, this.props.signup.email, this.props.signup.password)}> SignUp </button> </Link>
      </center>

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
