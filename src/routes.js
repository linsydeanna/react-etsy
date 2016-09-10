import React, { Component } from 'react';
import {Router, Route, hashHistory, IndexRoute} from 'react-router'
import App from './App'
import Login from './Login'
import Home from './Home'
import Info from './Info'
import WishList from './WishList'

const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Login}/>
      <Route path="/home" component={Home}/>
      <Route path="/info/:id" component={Info}/>
      <Route path="/wishlist" component={WishList}/>
    </Route>
  </Router>
)

export default routes
