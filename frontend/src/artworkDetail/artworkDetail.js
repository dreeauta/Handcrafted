import * as ReactRedux from 'react-redux';import React from 'react';
import * as actions from './artworkDetail.actions';


class artworkDetail extends React.Component {
  componentDidMount() {
    this.props.fetchArtworkDetail(this.props.router.params.id);
  }


render() {

  let artImages;

  if (this.props.artworkDescription.art_gallery) {
    artImages =
    this.props.artworkDescription.art_gallery.map((input,idx) => <p className="artwork-pieces"> <img src={input.image_path}/>   ${input.price}  {input.name}
    <button onClick={event=> this.props.cart.addToCart(this.props.art_gallery.idx)}>Add to Cart </button></p> );
  }

return (
  <div>
  <center>
  <p>
 { this.props.artworkDescription.art_gallery.firstname }
 </p>
  { artImages }

  </center>
   </div>
 );
}
}



const artworkDetailContainer = ReactRedux.connect(
  state => state,
  // reducer artworkDescription
  actions
)(artworkDetail);

export default artworkDetailContainer;
