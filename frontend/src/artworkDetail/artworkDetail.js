import * as ReactRedux from 'react-redux';import React from 'react';
import * as actions from './artworkDetail.actions';


class artworkDetail extends React.Component {
  componentDidMount() {
    this.props.fetchArtworkDetail(this.props.params.id)
  }


render() {

  let artImages;

  if (this.props.artworkDescription.art_gallery) {
    artImages =
    this.props.artworkDescription.art_gallery.map((input,idx) => <p> <img src={input.image_path}/> <br/> {input.name} <br/> {input.price} <br/>
    <button>Add to Cart </button></p> );
  }

return (
  <div>
  <center>

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
