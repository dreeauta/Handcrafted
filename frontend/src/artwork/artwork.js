import React from 'react';
import '.././App.css';
import * as ReactRedux from 'react-redux';
import * as actions from './artwork.actions';
import { Link } from 'react-router';


class artwork extends React.Component {

  componentDidMount() {
    this.props.fetchArtCover(this.props.params.data)
  }

render() {

  let loginName;
     let token = this.props.login.token;
     if (token) {
       loginName = "hi " + this.props.login.firstname + "!";
     }

   let coverImages;
   console.log(this.props.art.featured_artist)

   console.log(this.props.art.featured_artist.firstname);

   if (this.props.art.featured_artist) {
     coverImages = this.props.art.featured_artist.map((input,idx) => <Link to={"/artwork/"+ input.id} key={idx} className="artCover" >  <img src={input.featured_image}/></Link>  );
   }

return (
  <div>

  <center>
  <p>  { loginName }  </p>


  <p>
  { coverImages }
  </p>
  <p>
  { }
  </p>

  </center>

  </div>

);
  }
}


const artworkContainer = ReactRedux.connect(
  state => state,
  // state.art

  actions
)(artwork);


export default artworkContainer;
