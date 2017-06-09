import * as ReactRedux from 'react-redux';import React from 'react';
import * as actions from './artworkItem.actions';
import { Link } from 'react-router';
import AlertContainer from 'react-alert';




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

alertOptions = {
  offset: 14,
  position: 'bottom right',
  theme: 'light',
  time: 4250,
  transition: 'scale'
}



showAlert = () => {
  this.msg.show('Item added to cart', {
    time: 2000,
    type: 'success',
    icon: <img src="./addevent/event-icon.png" />
  })
}

render() {
 let displayItem;


 if (this.props.artworkItem.artworkItem  ){
   displayItem = this.props.artworkItem.artworkItem.name
 }
 else {
  displayItem = <p> item not available </p>
 }

 let itemAdded;

 if ( this.props.login.token === "") {
//    itemAdded = <p> Item added to cart!  </p>
//  }
// else (
  itemAdded = <p> To add item to cart please
  <Link to="/login"> login </Link>
  </p>
}

let artistname;


 if (this.props.artworkDescription.art_gallery &&
     this.props.artworkDescription.art_gallery[0]) {
   artistname = this.props.artworkDescription.art_gallery[0].artist_name
 }



return (
  <div>
  <Link to={"/artwork/"+ this.props.artworkDescription.art_gallery.id}>
  <span className="art-piece-title">
  { artistname }
  </span>
  </Link>

  <img className="art-piece-img" src={this.props.artworkItem.artworkItem.image_path}/>


  <div className="art-piece-description">
  <span className="art-piece-name">
  { this.props.artworkItem.artworkItem.name}
  </span>
  <br/>
  ${this.props.artworkItem.artworkItem.price}

  <br/>
  {this.props.artworkItem.artworkItem.description}
  <br/>

  <AlertContainer ref={a => this.msg = a} {...this.alertOptions} />


  <button onClick={(event) => { this.props.addToCart(this.props.artworkItem.artworkItem.id, this.props.login.token)}, this.showAlert}> Add to Cart </button>
   <span className="art-piece-itemadded"> { itemAdded }


    </span>

   </div>

   </div>
 );
}
}



const artworkItemContainer = ReactRedux.connect(
  state => state,
  actions
)(artworkItem);

export default artworkItemContainer;
