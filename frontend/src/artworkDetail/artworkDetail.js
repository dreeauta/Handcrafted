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
    this.props.artworkDescription.art_gallery.map((input,idx) => <p key = {idx}> <Link to={"/artworkItem/"+ input.id}> <img src={input.image_path}/> </Link>
    <span className="artwork-name"> {input.name}  </span>

     </p> );
  }

return (
  <div className="artwork-div">
  <span className="artwork-title">
  { artistname }
  </span>



  <div className="artwork-info">
  <img className="artwork-profile" src={ artist_image }/>
  <br/>
  { artistbio }
  <br/>
  { email }
  <br/>
  </div>


  <div className="artwork-images">
  { artImages }
  </div>



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
