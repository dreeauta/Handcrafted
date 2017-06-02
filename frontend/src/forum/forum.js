import React from 'react';
import * as ReactRedux from 'react-redux';
import * as actions from './userLogin.actions';
import { Link } from 'react-router';


class forum extends React.Component {
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



  return (

    <div className="login-div">

    </div>
  );
}
}

const forumContainer = ReactRedux.connect(
  state => state,
  // state.login,

  actions
)(forum);

export default forumContainer;
