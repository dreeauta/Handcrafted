import * as ReactRedux from 'react-redux';import React from 'react';
import * as actions from './artworkItem.actions';


class artworkItem extends React.Component {

  componentDidMount(){
    this.props.fetchartworkItem(this.props.params.id)
  }

render() {
 let displayItem;

 if (this.props.artworkItem.artworkItem ){
   let displayItem = <p> this.props.artworkItem.artworkItem.name </p>
 }
 else {
   let displayItem = <p> item not available </p>
 }

return (
  <div>

   {displayItem}
   <button> Add to Cart </button>

   </div>
 );
}
}



const artworkItemContainer = ReactRedux.connect(
  state => state,
  // reducer artworkItem
  actions
)(artworkItem);

export default artworkItemContainer;
