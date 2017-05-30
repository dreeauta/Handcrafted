import React from 'react';
import * as ReactRedux from 'react-redux';
import * as actions from './userSignup.actions';
import { Link } from 'react-router';
import Dropzone from 'react-dropzone';
import sha1 from 'sha1';
import superagent from 'superagent';

class userSignup extends React.Component {

  uploadFile(files){
    // console.log('uploadFile: ')
    // const image = files[0]
    // const cloudName = 'dsyp1npet'
    // const url = 'https://api.cloudinary.com/v1_1/' + cloudName + '/upload'
    //
    // const timestamp = Date.now()/1000;
    // const uploadPreset = 'sajrpxda';
    //
    // const paramsStr = 'timestamp=' +timestamp+ '&upload_present=' + uploadPreset+ '3JyJTBm0s1fK1MH2io9MkevdubU';
    //
    // const signature = sha1(paramsStr)
    // const params = {
    //   'api_key': '932191477645934',
    //   'timestamp': timestamp,
    //   'upload_preset': uploadPreset,
    //   'signature': signature
    // }
    //
    // let uploadRequest = superagent.post(url)
    // uploadRequest.attach('file', image)
    //
    // Object.keys(params).forEach((key) => {
    //   uploadRequest.field(key, params[key])
    // })
    //
    // uploadRequest.end((err, resp) => {
    //   if (err) {
    //     alert(err)
    //     return
    //   }
    //   console.log('upload complete:' +JSON.stringify(resp.body))
    //
    // })


  }

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


      <Dropzone accept="image/png"
        onDrop={this.uploadFile.bind(this)} >
        {({ isDragActive, isDragReject, acceptedFiles, rejectedFiles }) => {
      if (isDragActive) {
        return "This file is authorized";
      }
      if (isDragReject) {
        return "This file is not authorized";
      }
      return acceptedFiles.length || rejectedFiles.length
        ? `Accepted ${acceptedFiles.length}, rejected ${rejectedFiles.length} files`
        : "Try dropping some files.";
    }}
        </Dropzone>

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
