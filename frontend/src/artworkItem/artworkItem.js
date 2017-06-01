import * as ReactRedux from 'react-redux';import React from 'react';
import * as actions from './artworkItem.actions';


class artworkItem extends React.Component {

  componentDidMount(){
    this.props.fetchartworkItem(this.props.params.id)
  }

  componentWillReceiveProps(newProps) {
  if (this.props.params.id !== newProps.params.id) {
    let id = newProps.params.id;
    this.props.fetchartworkItem(id);
  }
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

 let itemAdded;

 if (this.props.artworkItem.addedToCart) {
   itemAdded = <p> Item added to cart!  </p>
 }


return (
  <div>

  <img src={this.props.artworkItem.artworkItem.image_path}/>
  <br/>
  { this.props.artworkItem.artworkItem.name}

  {this.props.artworkItem.artworkItem.description}
  <br/>
  {this.props.artworkItem.artworkItem.price}

   <button onClick={(event) => { this.props.addToCart(this.props.artworkItem.artworkItem.id, this.props.login.token)}}> Add to Cart </button>
   { itemAdded }

   </div>
 );
}
}



const artworkItemContainer = ReactRedux.connect(
  state => state,
  actions
)(artworkItem);

export default artworkItemContainer;
