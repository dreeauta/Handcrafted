import * as ReactRedux from 'react-redux';import React from 'react';
import * as actions from './artworkDetail.actions';
import { Link } from 'react-router';


class artworkDetail extends React.Component {
  componentDidMount() {
    this.props.fetchArtworkDetail(this.props.router.params.id);
  }

  componentWillReceiveProps(newProps) {
  if (this.props.router.params.id !== newProps.router.params.id) {
    let id = newProps.router.params.id;
    this.props.fetchArtworkDetail(id);
  }
}

render() {

  let artistname;
  let artistbio;
  let email;
  let artist_image;

  if (this.props.artworkDescription.art_gallery &&
      this.props.artworkDescription.art_gallery[0]) {
    artistname = this.props.artworkDescription.art_gallery[0].artist_name
    artistbio = this.props.artworkDescription.art_gallery[0].bio
    email = this.props.artworkDescription.art_gallery[0].email
    artist_image = this.props.artworkDescription.art_gallery[0].artist_image
  }
  else {
    artistname =  <p> artist not available </p>

  }




  let artImages;

  if (this.props.artworkDescription.art_gallery) {
    artImages =
    this.props.artworkDescription.art_gallery.map((input,idx) => <p key = {idx} className="artwork-pieces"> <Link to={"/artworkItem/"+ input.id}> <img src={input.image_path}/> </Link>  ${input.price}  {input.name}
     </p> );
  }

return (
  <div>
  <img className="artDetail-title" src="./artwork/artwork-title.png"/>

  <div className="artist-info">
  <img className="artist-profile" src={ artist_image }/>
  <br/>
  { artistname }
  <br/>
  { artistbio }
  <br/>
  { email }
  <br/>
  </div>


  <div className="artDetail-images">

  { artImages }
  </div>


  <p>
  <button onClick={event=> this.props.addToCart(this.props.artWorkDescription.art_gallery, this.props.login.token)}>Add to Cart </button>
  </p>

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
