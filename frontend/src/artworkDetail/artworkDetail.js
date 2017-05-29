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
    this.props.artworkDescription.art_gallery.map((input,idx) => <p key = {idx} className="artwork-pieces"> <img src={input.image_path}/>   ${input.price}  {input.name}

     </p> );
  }

return (
  <div>
  <center>
  <img src="./artwork/artwork-title.png"/>

  <p>
 </p>
  { artImages }


  <p>
  this.props.artworkDescription.name
  <button onClick={event=> this.props.addToCart(this.props.artWorkDescription.art_gallery, this.props.login.token)}>Add to Cart </button>
  </p>

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
