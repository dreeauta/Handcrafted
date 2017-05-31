import React from 'react';
import * as ReactRedux from 'react-redux';
import * as actions from './userLogin.actions';
import { Link } from 'react-router';


class userLogin extends React.Component {
  //
  // componentDidMount() {
  //   this.props.checkPassword(this.props.password);
  // }
  //
  // componentWillReceiveProps(newProps) {
  //   if (this.props.password === this.params.password) {
  //     this.props.getPage(newProps.params.title);
  //   }
  // }

render() {
  // console.log(this.props);


  return (
    <div className="background-div">
<span className="login-title"> Login  </span>
    <br/>

    <div className="login-form">
    <label> Username: </label>
    <br/>
    <input type="text" onChange={event => this.props.loginChange(event.target.value, 'username')}/>

  <br/>
    <label> Password: </label>
    <br/>

    <input type="password" onChange={event => this.props.loginChange(event.target.value, 'password')}/>
  <br/>
  <br/>
<Link to={"/"}>   <button onClick={() => this.props.submitLogin(this.props.login.username, this.props.login.password)}> Login </button> </Link>
<br/>
  </div>
{/*  <Link to={"/SignUp"}>  <button> SignUp </button> </Link> */}

<img className="tree-gif" src="./tree.gif"/>

    </div>
  );
}
}

const userLoginContainer = ReactRedux.connect(
  state => state,
  // state.login,

  actions
)(userLogin);

export default userLoginContainer;
