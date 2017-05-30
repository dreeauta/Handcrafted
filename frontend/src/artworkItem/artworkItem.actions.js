import * as ReactRedux from 'react-redux';import React from 'react';
import * as actions from './artworkItem.actions';


class artworkItem extends React.Component {

  render() {
    return(

    );
  }
}

const artworkItem = ReactRedux.connect(
  state => state,
  // reducer artworkItem
  actions
)(artworkDetail);

export default artworkItemContainer;
