import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';
import ReduxThunk from 'redux-thunk';

import { Router, Route, Link, IndexLink, IndexRoute, hashHistory } from 'react-router';


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


const reducer= Redux.combineReducers({
  home: homeReducer,
  signup: userSignupReducer,
  login: userLoginReducer,
  art: artworkReducer,
  artDescription: artworkDetailReducer,
  cart: cartReducer
});

const store = Redux.createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  Redux.applyMiddleware(ReduxThunk)
);

class AppLayout extends React.Component {
  render() {


{/*
    let menubaroptions = this.props.login.token ? (

      <div className="navbar">

      <IndexLink to="/" activeClassName="active">
      Home </IndexLink>
      <Link to="/SignOut" activeClassName="active">
      SignOut </Link>

      <Link to="/Cart" activeClassName="active">
      Cart </Link>
      <Link to="/Events" activeClassName="active">
      Events </Link>
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
  */}

    return (
      <div>

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

      <div className="category-nav">
      <Link to="/Artwork" activeClassName="active">
      Artwork
      </Link>
      <br/>
      <Link to="/tacticalgear" activeClassName="active">
      Tactical Gear
      </Link>
      <br/>
      <Link to="/jewelry" activeClassName="active">
      Jewelry
      </Link>
      <br/>
      <Link to="/accessories" activeClassName="active">
      Accessories
      </Link>
      <br/>
      <Link to="/colorme" activeClassName="active">
      Color Me
      </Link>

      </div>

      <div className="content">
      {this.props.children}
      </div>

      </div>
    )
    }
  }

  ReactDOM.render(
    <ReactRedux.Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={AppLayout}>
        <IndexRoute component={homeContainer}/>
        <Route path="/Login" component={userLoginContainer}/>
        <Route path="/SignUp" component={userSignupContainer}/>
        <Route path="/Cart" component={cartContainer}/>
        <Route path="/artwork" component={artworkContainer}/>
        <Route path="/artwork/:id" component={artworkDetailContainer}/>



        </Route>
      </Router>
      </ReactRedux.Provider>,
    document.getElementById('root')
  );
