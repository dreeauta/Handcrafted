
import React from 'react';
import ReactDOM from 'react-dom';
import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';
import ReduxThunk from 'redux-thunk';

import { Router, Route, Link, IndexLink, IndexRoute, hashHistory } from 'react-router';

import {persistStore, autoRehydrate} from 'redux-persist';
import CookieStorage from 'redux-persist-cookie-storage';


import homeReducer from './homepage/home.reducer';
import homeContainer from './homepage/home';
// import categoryReducer from './category/category.reducer';
// import categoryContainer from './category/category';
import userSignupReducer from './userSignup/userSignup.reducer';
import userSignupContainer from './userSignup/userSignup';
import userLoginReducer from './userLogin/userLogin.reducer';
import userLoginContainer from './userLogin/userLogin';
import cartReducer from './cart/cart.reducer';
import cartContainer from './cart/cart';
import artworkContainer from './artwork/artwork';
import artworkReducer from './artwork/artwork.reducer';
import artworkDetailContainer from './artworkDetail/artworkDetail';
import artworkDetailReducer from './artworkDetail/artworkDetail.reducer';
import artworkItemContainer from './artworkItem/artworkItem';
import artworkItemReducer from './artworkItem/artworkItem.reducer';
import artistSignupFormContainer from './artistSignup/artistSignup';
import artistSignupReducer from './artistSignup/artistSignup.reducer';
import artistProfileContainer from './artistProfile/artistProfile';
import artistProfileReducer from './artistProfile/artistProfile.reducer';
import forumReducer from './forum/forum.reducer';
import forumContainer from './forum/forum.reducer';


import checkoutContainer from './checkout/checkout';
import checkoutReducer from './checkout/checkout.reducer';
import eventsContainer from './events/events';
import eventsReducer from './events/events.reducer';
import aboutContainer from './about/about';
import addEventsReducer from './addEvents/addEvents.reducer';
import addEventsContainer from './addEvents/addEvents';


//burger menu imports
import {reducer as burgerMenu} from 'redux-burger-menu';
import { stack as Menu } from 'react-burger-menu';


import './index.css';


const reducer= Redux.combineReducers({
  home: homeReducer,
  signup: userSignupReducer,
  login: userLoginReducer,
  art: artworkReducer,
  artworkDescription: artworkDetailReducer,
  artworkItem: artworkItemReducer,
  cart: cartReducer,
  checkout: checkoutReducer,
  events: eventsReducer,
  eventsadd: addEventsReducer,
  artistsignup: artistSignupReducer,
  artistProfile : artistProfileReducer,
  forum: forumReducer,
  burgerMenu
});

const store = Redux.createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  Redux.compose(Redux.applyMiddleware(ReduxThunk), autoRehydrate())
);


persistStore(store, { storage: new CookieStorage() })


class AppLayout extends React.Component {
  render() {


    let menubaroptions = this.props.login && this.props.login.token ? (

      <div className="navbar">

      <IndexLink to="/" activeClassName="active">
      Home </IndexLink>
      <a href="#" onClick={this.props.signOut}>
      SignOut </a>

      <Link to="/Cart" activeClassName="active">
      Cart </Link>
      </div>


 ) : (
      <div className="navbar">

      <IndexLink to="/" activeClassName="active">
      Home </IndexLink>
      <Link to="/Login" activeClassName= "active">
      Login </Link>
      <Link to="/SignUp" activeClassName="active">
      SignUp </Link>
      <Link to="/Cart" activeClassName="active">
      Cart </Link>

      </div>
  )


    return (
      <div>

      <div className="navbar">

      { menubaroptions }

      </div>

      <Menu pageWrapId={ "page-wrap" } noOverlay   >
      <main id="page-wrap">
      <div className= "category-nav">
      <Link to="/Artwork" activeClassName="active">
      <img src="./home/articon.png"/> Artwork
      </Link>
      <br/>
      <Link to="/artist_signup" activeClassName= "active">
      <img src="./home/artisticon.png"/> Artist Signup
      </Link>
      <br/>
      <Link to="/events" activeClassName="active">
      <img src="./home/eventsicon.png"/> Events
      </Link>
      <br/>
      <Link to="/addevents" activeClassName="active">
      <img src="./home/addeventsicon.png"/> Add an Event
      </Link>
      <br/>
      <Link to="/forum" activeClassName="active">
      <img src="./home/addeventsicon.png"/> Forum
      </Link>
      <br/>

      <Link to="/about" activeClassName="active">
      <img src="./home/abouticon.png"/> About
      </Link>

      </div>

      </main>
      </Menu>

      <div className="content">
      {this.props.children}
      </div>

      </div>
    )
    }
  }

  const AppLayoutContainer = ReactRedux.connect(
    state => state,
    //  reducer applayout
    { signOut: function signOut() {
      return {
        type: 'logout'
          }
        }
      }
  )(AppLayout);


  ReactDOM.render(
    <ReactRedux.Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={AppLayoutContainer}>
        <IndexRoute component={homeContainer}/>
        <Route path="/Login" component={userLoginContainer}/>
        <Route path="/SignUp" component={userSignupContainer}/>
        <Route path="/Cart" component={cartContainer}/>
        <Route path="/Checkout" component={checkoutContainer}/>
        <Route path="/artwork" component={artworkContainer}/>
        <Route path="/artwork/:id" component={artworkDetailContainer}/>
        <Route path="/artworkitem/:id" component={artworkItemContainer}/>
        <Route path="/artist_signup"
        component={artistSignupFormContainer}/>
        <Route path="/artistProfile"
        component={artistProfileContainer}/>

        <Route path="/forum"
        component={forumContainer}/>

        <Route path="/events" component={eventsContainer}/>
        <Route path="/addevents" component={addEventsContainer}/>
        <Route path="/about" component={aboutContainer}/>


        </Route>
      </Router>
      </ReactRedux.Provider>,
    document.getElementById('root')
  );
