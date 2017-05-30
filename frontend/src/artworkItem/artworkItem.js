import * as ReactRedux from 'react-redux';import React from 'react';
import * as actions from './artworkItem.actions';


class artworkItem extends React.Component {

  componentDidMount(){
    this.props.fetchartworkItem(this.props.params.id)
  }

render() {
 let displayItem;

console.log(this.props)
 if (this.props.artworkItem.artworkItem  ){
   displayItem = this.props.artworkItem.artworkItem.name
 }
 else {
  displayItem = <p> item not available </p>
 }

return (
  <div>

   {displayItem}
   <button onClick={event => this.props.addToCart(this.props.artworkItem.artworkItem.id, this.props.login.token)}> Add to Cart </button>

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
